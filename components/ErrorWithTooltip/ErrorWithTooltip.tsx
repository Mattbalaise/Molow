import './ErrorWithTooltip.css'

function ErrorWithTooltip({ messages }: {
    messages?: string[]
}) {
    return (
        messages && messages.length > 0 ? (
            <div className="input-error-wrapper">
                <div className="tooltip-wrapper">
                    <span className="info-icon">!</span>
                    <div className="tooltip-box">
                        {messages.map((message, i) => (
                            <p key={i}> {message}</p>
                        ))}
                    </div>
                </div>
            </div>
        ) : <></>
    );
}

export { ErrorWithTooltip }
