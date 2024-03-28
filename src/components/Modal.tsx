import { Dialog } from "@headlessui/react";
import { useStore } from "@nanostores/react";
import { modalOpen } from "~/modalStore";
import history from "~/images/history.jpg";
import bump from "~/images/bump.jpg";
import { compiledContent as diablo } from "../content/diablo.md";
import { compiledContent as button } from "../content/button.md";
import { compiledContent as freelancing } from "../content/freelancing.md";
import { compiledContent as agency } from "../content/agency.md";
import { compiledContent as tools } from "../content/tools.md";
import { compiledContent as thinking } from "../content/thinking.md";

export const Modal = () => {
  const $modalOpen = useStore(modalOpen);

  return (
    <Dialog
      open={$modalOpen !== "none"}
      onClose={() => modalOpen.set("none")}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="mx-auto w-full max-w-xl rounded-md bg-white p-4">
            <button
              className="float-end mb-2 ms-2 rounded-lg bg-amber-600 p-2 leading-none text-white"
              onClick={() => modalOpen.set("none")}
            >
              Close
            </button>
            {$modalOpen === "history" && <History />}
            {$modalOpen === "diablo" && <div dangerouslySetInnerHTML={{ __html: diablo() }} />}
            {$modalOpen === "button" && <div dangerouslySetInnerHTML={{ __html: button() }} />}
            {$modalOpen === "freelancing" && (
              <div dangerouslySetInnerHTML={{ __html: freelancing() }} />
            )}
            {$modalOpen === "agency" && <div dangerouslySetInnerHTML={{ __html: agency() }} />}
            {$modalOpen === "tools" && (
              <>
                <div dangerouslySetInnerHTML={{ __html: tools() }} />
                <img src={bump.src} alt="Bump" />
              </>
            )}
            {$modalOpen === "thinking" && <div dangerouslySetInnerHTML={{ __html: thinking() }} />}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

const History = () => {
  return (
    <>
      <p className="m-0">
        That's Tailwind in production in 2018. Version 0.7.3 and lots of <code>@apply</code>, but
        you have to start somewhere.
      </p>
      <img src={history.src} alt="Tailwind in 2018" className="m-0 mt-4" />
    </>
  );
};
