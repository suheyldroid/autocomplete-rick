"use client"
import {QueryClient, QueryClientProvider as Provider} from 'react-query';
import {PropsWithChildren} from "react";

const queryClient = new QueryClient();

function QueryClientProvider({children}: PropsWithChildren) {
    return (
        <Provider client={queryClient}>
            {children}
        </Provider>
    )
}

export {QueryClientProvider}