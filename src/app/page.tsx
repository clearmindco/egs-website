import { Disruption } from "@/components/sections/Disruption";
import { Exposure } from "@/components/sections/Exposure";
import { Reframe } from "@/components/sections/Reframe";
import { Trust } from "@/components/sections/Trust";
import { Permission } from "@/components/sections/Permission";
import { AuditInvitation } from "@/components/sections/AuditInvitation";

export default function Home() {
  return (
    <>
      <Disruption />
      <Exposure />
      <Reframe />
      <Trust />
      <Permission />
      <AuditInvitation />
    </>
  );
}
