import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import './Error.scss';

function Error() {
    const error = useRouteError();

    return (
        <div className='error-container'>
            <div className='error-information'>
                {getErrorHeader(error)}
                <div className='error-siren-emoji'>🚨</div>
                <div className='error-description'>
                    <div><b>Houston, we have a problem!</b></div>
                    <br/>
                    <div>{getErrorDetails(error)}</div>
                </div>
            </div>
            <div className='error-background'/>
        </div>
    );
}

function getErrorHeader(error: unknown) {
    if (isRouteErrorResponse(error)) {
        return (
            <h1 className='error-title'>{error.status + ' ' + error.statusText}</h1>
        );
    }
    console.error("Unknown error found:", error);
    return (
        <h1 className='error-title'>Error Found</h1>
    );
}

function getErrorDetails(error: unknown) {
    if (isRouteErrorResponse(error) && error.error) {
        return (
            <>
                <div className='error-heading'>This is what we know:</div>
                <code>{error.error.message}</code>
            </>
        );
    }
    return null;
}

export default Error;