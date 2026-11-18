mixin () {
  public query func getApiDoc() : async Text {
    "# VS Auto Noleggio — Backend API\n" #
    "\n" #
    "## Purpose\n" #
    "\n" #
    "This canister is the backend for the **VS Auto Noleggio** showcase website, a car dealership and rental business located at Via Enrico Fermi 10, Orio al Serio (BG), Italy. The site is a static informational showcase: it presents the company's identity, contact details, opening hours, and legal information. The backend stores no user-submitted records and exposes no business data endpoints.\n" #
    "\n" #
    "## Public Methods\n" #
    "\n" #
    "### `getApiDoc : () -> (text) query`\n" #
    "\n" #
    "Returns this document as Markdown. It is a read-only query with no parameters and no authorization requirement — any caller, including anonymous, may call it. It reads no canister state.\n" #
    "\n" #
    "### `schema : () -> (text) query`\n" #
    "\n" #
    "Returns the OQL schema description of the canister's queryable data. This canister stores no queryable entities, so the schema is empty. Read-only, no authorization requirement.\n" #
    "\n" #
    "### `execute : (text) -> (text) query`\n" #
    "\n" #
    "Executes an OQL query against the canister's registered entities. Because no entities are registered, every query returns an empty result set. Read-only, no authorization requirement.\n" #
    "\n" #
    "### `assignCallerUserRole : (principal, UserRole) -> ()`\n" #
    "\n" #
    "Assigns a role to a principal. Requires an admin caller. This is part of the platform authorization mixin.\n" #
    "\n" #
    "### `getCallerUserRole : () -> (UserRole) query`\n" #
    "\n" #
    "Returns the role of the calling principal. Read-only.\n" #
    "\n" #
    "### `isCallerAdmin : () -> (bool) query`\n" #
    "\n" #
    "Returns whether the calling principal is an admin. Read-only.\n" #
    "\n" #
    "## Authentication and Authorization\n" #
    "\n" #
    "The showcase content is public: the OQL query methods (`schema`, `execute`) and `getApiDoc` are readable by any caller, including anonymous ones. The authorization methods (`assignCallerUserRole`, `getCallerUserRole`, `isCallerAdmin`) are provided by the platform authorization mixin; role assignment requires an admin caller.\n" #
    "\n" #
    "The app's frontend pins an Internet Identity derivation origin, published at `/.well-known/ii-derivation-origin` when available. An agent already holding the user's Internet Identity authorization derives the correct per-app principal against that origin (for example `icp identity link web <name> --app <host>`). Such a delegation acts with the user's full authority in this app until it expires.\n" #
    "\n" #
    "Registration is not required to read any public method on this canister. A caller that has never signed in through the app's frontend is unregistered, and a signed-in caller derived against a different origin is a different principal than the one the frontend would register.\n" #
    "\n" #
    "## Units and Encodings\n" #
    "\n" #
    "- **Timestamps**: none are exposed by this canister.\n" #
    "- **Identifiers**: principals are Internet Computer principals; roles are the authorization mixin's `UserRole` variant.\n" #
    "- **Text**: all method payloads are UTF-8 text. `getApiDoc` returns Markdown; `schema` and `execute` return JSON-encoded text.\n" #
    "- **Optional values**: none are exposed.\n" #
    "\n" #
    "## Lifecycle and Polling\n" #
    "\n" #
    "This canister has no asynchronous operations, no background jobs, and no state transitions. Every method returns synchronously within its call. There is nothing to poll.\n" #
    "\n" #
    "## Mutation Retry Safety\n" #
    "\n" #
    "`getApiDoc`, `schema`, `execute`, `getCallerUserRole`, and `isCallerAdmin` are read-only queries and are safe to retry any number of times. `assignCallerUserRole` is an update; retrying it with the same arguments is idempotent (it sets the role to the given value).\n" #
    "\n" #
    "## Errors, Limits, and Gotchas\n" #
    "\n" #
    "- `assignCallerUserRole` traps when the caller is not an admin.\n" #
    "- `execute` never returns data because no entities are registered; an empty result is expected, not an error.\n" #
    "- `getApiDoc` returns a static document; it does not reflect runtime state."
  };
};
