// We only export the common subset between @inrupt/solid-client-authn-node and @inrupt/solid-client-authn-browser
export { Session, ISessionOptions } from '@inrupt/solid-client-authn-node';
export {
  ILoginInputOptions,
  ISessionInfo,
  IStorage,
  NotImplementedError,
  ConfigurationError,
  InMemoryStorage,
} from '@inrupt/solid-client-authn-core';

// Convenience flags for detecting environment
const node = true;
const browser = false;
export { node, browser };
