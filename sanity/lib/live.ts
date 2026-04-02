// Querying with "sanityFetch" will keep content automatically updated.
// When Sanity env vars are missing we fall back to inert helpers so the app
// can still boot against local seed data.
import { Fragment } from "react";
import { defineLive } from "next-sanity/live";
import { readToken } from "../env";
import { client } from "./client";

const live = client
  ? defineLive({
      client,
      serverToken: readToken || false,
      browserToken: false,
    })
  : null;

export const sanityFetch = live?.sanityFetch;
export const SanityLive = live?.SanityLive ?? Fragment;
