/* eslint-disable unicorn/filename-case */
// We only export the common subset between @inrupt/solid-client-authn-node and @inrupt/solid-client-authn-browser
export { Session, ISessionOptions } from '@inrupt/solid-client-authn-browser';
export {
  ILoginInputOptions,
  ISessionInfo,
  IStorage,
  NotImplementedError,
  ConfigurationError,
  InMemoryStorage,
} from '@inrupt/solid-client-authn-core';

// Convenience flags for detecting environment
const node = false;
const browser = true;
export { node, browser };
