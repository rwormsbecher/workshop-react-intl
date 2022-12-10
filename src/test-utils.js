import IntlPolyfill from "intl";
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { IntlProvider } from "react-intl";

const hasFullICU = () => {
    // That's the recommended way to test for ICU support according to Node.js docs
    try {
        const january = new Date(9e8);
        const pt = new Intl.DateTimeFormat("pt", { month: "long" });
        return pt.format(january) === "janeiro";
    } catch (err) {
        return false;
    }
};

export const setupTests = () => {
    if (hasFullICU()) {
        Intl.NumberFormat.format = new Intl.NumberFormat("pt").format;
        Intl.DateTimeFormat.format = new Intl.DateTimeFormat("pt").format;
    } else {
        global.Intl = IntlPolyfill;
    }
};

function renderWithInternationalization(ui, { locale = "en-us", ...renderOptions } = {}) {
    function Wrapper({ children }) {
        return <IntlProvider locale={locale}>{children}</IntlProvider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithInternationalization };
