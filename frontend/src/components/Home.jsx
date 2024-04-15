import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'


import {
    KnockProvider,
    KnockFeedProvider,
    NotificationIconButton,
    NotificationFeedPopover,
} from "@knocklabs/react";

import "@knocklabs/react/dist/index.css";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const notifButtonRef = useRef(null);
    const [currentUser, setCurrentUser] = useState({ id: '123' });


    return (
        <><ErrorBoundary FallbackComponent={ErrorFallback}
            onReset={() => {
                window.location.reload()
            }}>

            <KnockProvider
                apiKey={import.meta.env.VITE_KNOCK_PUBLIC_API_KEY}
                userId="123"
            >
                <KnockFeedProvider feedId={import.meta.env.VITE_KNOCK_FEED_CHANNEL_ID}>
                    <>
                        <NotificationIconButton
                            ref={notifButtonRef}
                            onClick={(e) => setIsVisible(!isVisible)} />
                        <NotificationFeedPopover
                            buttonRef={notifButtonRef}
                            isVisible={isVisible}
                            onClose={() => setIsVisible(false)} />
                    </>
                </KnockFeedProvider>
            </KnockProvider>

        </ErrorBoundary></>
    )
}

export default Home