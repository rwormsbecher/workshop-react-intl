import React, { useState } from "react";
import {
    FormattedDate,
    FormattedDateParts,
    FormattedMessage,
    FormattedNumber,
    FormattedNumberParts,
    FormattedRelativeTime,
    FormattedTimeParts,
} from "react-intl";

function App() {
    const [isOnTour] = useState<boolean>(true);

    return (
        <main>
            <h1>The Offspring</h1>
            <p>
                <FormattedMessage
                    id="onTour"
                    description="Notifies user whether band is on tour"
                    defaultMessage="On Tour: <tourValue></tourValue>"
                    values={{
                        tourValue: () => (
                            <>
                                <i className="positive">
                                    {isOnTour && <FormattedMessage id="general.yes" defaultMessage="Yes" />}
                                </i>
                                <i className="negative">
                                    {!isOnTour && <FormattedMessage id="general.no" defaultMessage="no" />}
                                </i>
                            </>
                        ),
                    }}
                />
            </p>

            <p>2022-2023 tour dates: 21 concerts</p>
            <p>
                Next concert near you: <FormattedRelativeTime value={+5} unit="month" />
                <br />
                <br />
                <FormattedTimeParts value={new Date("2023-05-13T17:00:00")}>
                    {(parts) => (
                        <>
                            <b>{parts[0].value}</b>
                            {parts[1].value}
                            <small>{parts[2].value}</small>
                        </>
                    )}
                </FormattedTimeParts>
                <br />
                <br />
                &nbsp;(Brussels)
            </p>

            <p>
                <FormattedNumberParts value={20000000}>
                    {(parts) => (
                        <>
                            <b>{parts[0].value}</b>
                            {parts[1].value}
                            <small>{parts[2].value}</small>
                            {parts[3].value}
                            <sup>
                                <small>{parts[4].value}</small>
                            </sup>
                        </>
                    )}
                </FormattedNumberParts>
                <br />
                <br />
                <br />
                <br />
                <br />
                <FormattedNumber value={1071250.0} />
                &nbsp; fans get concert alerts for this artist. Join Songkick to track The Offspring and get concert
                alerts when they play near you.
            </p>

            <button>YES, PLEASE NOTIFY ME</button>
        </main>
    );
}

export default App;
