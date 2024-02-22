import {clientsClaim } from 'workbox-core';
import {precacheAndRoute} from 'workbox-precaching';
import {skipWaiting} from 'workbox-core';

clientsClaim();
skipWaiting();
precacheAndRoute(self.__WB_MANIFEST);