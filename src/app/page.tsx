import { TileLink } from "@/shared/ui/TileLink/TileLink";

export default function Home() {
  return (
    <main>
      <div className="HomeGrid">
          <TileLink href="/template">
            Template title
          </TileLink>
      </div>
    </main>
  );
}
