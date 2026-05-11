import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/common/caching/a_introduction'>Introduction</TileLink>
      <TileLink href='/common/caching/backend_app'>Backend App</TileLink>
      <TileLink href='/common/caching/database_app'>Data Base App</TileLink>
      <TileLink href='/common/caching/http_headers'>HTTP headers</TileLink>
      <TileLink href='/common/caching/frontend_app'>Frontend-app</TileLink>
      <TileLink href='/common/caching/service_worker'>Service-Worker</TileLink>
    </TileGrid>
  );
}
