import * as Tooltip from "@radix-ui/react-tooltip";
import { HelpCircle } from "lucide-react";

export default function ToolTipCard({ warnings }: { warnings: string[] }) {
  if (!warnings || warnings.length === 0) return null;

  return (
    // Provider controls timings app-wide
    <Tooltip.Provider delayDuration={0} skipDelayDuration={0} >
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            className="rounded-full  transition translate-y-[3px]  px-2 hover:opacity-75"
            aria-label="Show warnings"
          >
            <HelpCircle className="size-[14px] text-gray-600" />
          </button>
        </Tooltip.Trigger>

        <Tooltip.Portal >
          <Tooltip.Content
            side="right"
            sideOffset={6}
            align="center"
            className="bg-white  border-[#0f1111] rounded-[5px] border-[1px]  p-0 focus:outline-none"
          >
            {/* <Tooltip.Arrow style={{ fill: "#ffff", stroke: "#0f1111", strokeWidth: 1, }} /> */}
            <div className="p-2 text-[12px] text-[#0f1111]">
              <ul className="list-disc list-inside space-y-1">
                {warnings.map((w, i) => (
                  <li key={i}> {w}</li>
                ))}
              </ul>
            </div>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
