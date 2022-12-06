import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import App from "./App";
import { translationSets } from "./i18n/lang";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// logic for setting our messages for the application. Deciding whether to use Dutch or English

root.render(
    <React.StrictMode>
        <IntlProvider
            locale={navigator.language}
            key={navigator.language}
            defaultLocale={navigator.language}
            messages={translationSets.en}
        >
            <App />
        </IntlProvider>
    </React.StrictMode>
);
