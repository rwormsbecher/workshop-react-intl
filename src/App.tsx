import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

function App() {
    const [isOnTour, setIsOnTour] = useState<boolean>(true);

    return (
        <main>
            <h1>The Offspring</h1>
            <p>
                <FormattedMessage
                    id="onTour"
                    description="Notifies user whether band is on tour"
                    defaultMessage="On Tour: {tourValue}"
                    values={{
                        tourValue: isOnTour ? "yes" : "no",
                    }}
                />
            </p>

            <p>2022-2023 tour dates: 21 concerts</p>
            <p>Next concert near you: 5 months (Brussels)</p>

            <p>
                1,071,250 fans get concert alerts for this artist. Join Songkick to track The Offspring and get concert
                alerts when they play near you.
            </p>

            <button>YES, PLEASE NOTIFY ME</button>
        </main>
    );
}

export default App;
