// components/ProjectModal.tsx

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Project } from "../app/types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
};

export default function ProjectModal({ isOpen, onClose, project }: Props) {
  if (!project) return null;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="scale-95 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="ease-in duration-200"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-95 opacity-0"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-neutral-900 p-6 text-white shadow-xl transition-all">
                <Dialog.Title className="text-2xl font-semibold mb-2">
                  {project.title}
                </Dialog.Title>
                <p className="text-sm text-gray-400 mb-4">
                  Category: <span className="text-white">{project.category}</span>
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-blue-700/30 text-blue-300 px-2 py-1 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                  <div>
                    <h4 className="font-semibold text-white">🧠 Emotional Challenge</h4>
                    <p>{project.emotionalChallenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">🧩 Architecture</h4>
                    <p>{project.architecture}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">📈 What I’d Do Next</h4>
                    <p>{project.nextSteps}</p>
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <button
                    onClick={onClose}
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded transition"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
