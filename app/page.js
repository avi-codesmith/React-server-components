import ClientDemo from "@/components/ClientDemo";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <ClientDemo>
        <RSCDemo />
        <ServerActionsDemo />
        <Suspense fallback={<p>Loading...</p>}>
          <UsePromiseDemo />
        </Suspense>
      </ClientDemo>
    </main>
  );
}
