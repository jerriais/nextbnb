export default props => (
    <div className="nav-container">
        <div className="modal-background" onClick={() => console.log('close')}></div>
        <div className="modal">{props.children}</div>
        <style jsx global>{`
            .modal-background {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.3)
            }

            .modal {
                position: absolute;
                left: 50%;
                top: 50%;
                width: calc(100vw-4em);
                overflow: auto;
                transform: translate(-50%, -50%);
                padding: 1em;
                border-radius: 0.2em;
                background: white;
            }
            `}</style>
    </div>
)