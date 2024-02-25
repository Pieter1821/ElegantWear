
/// <reference types="vite/client" />
declare module 'virtual:pwa-register' {
    export function registerSW(options? : {
        immediate : boolean,
        onNeedRefresh? : () => void,
        onOfflineReady? : () => void,
        onRegistered? : (registration : ServiceWorkerRegistration) => void,
        onRegisterError? : (error : any) => void,
        onServiceWorkerUpdateFound? : () => void,
        onServiceWorkerUpdateReady? : () => void,
        onServiceWorkerUpdateRollback? : () => void,
        onServiceWorkerUpdateSkip? : () => void,
        onServiceWorkerUpdateSuccess? : () => void,
        onServiceWorkerUpdateFailure? : () => void,
        onServiceWorkerUpdateRollbackFailure? : () => void,
        onServiceWorkerUpdateRollbackSuccess? : () => void,
        onServiceWorkerUpdateSkipFailure? : () => void,
        onServiceWorkerUpdateSkipSuccess? : () => void,
        onServiceWorkerUpdateSuccessFailure? : () => void,
        onServiceWorkerUpdateSuccessSuccess? : () => void,
        onServiceWorkerUpdateFailureFailure? : () => void,
        onServiceWorkerUpdateFailureSuccess? : () => void,
    })
}