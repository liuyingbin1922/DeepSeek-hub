'use client';

import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What is DeepSeek?",
    answer: "DeepSeek is an open-source AI model that specializes in reasoning and research capabilities. It can perform web searches, learn from information, and generate comprehensive reports with citations."
  },
  {
    question: "How can I use DeepSeek locally?",
    answer: "You can use DeepSeek locally by installing Ollama and pulling the DeepSeek R1 model. The process involves: 1) Installing Ollama, 2) Pulling the model using 'ollama pull deepseek-r1:8b', 3) Setting up the Ollama Deep Researcher environment."
  },
  {
    question: "What are the system requirements?",
    answer: "DeepSeek runs smoothly on M1 Mac and supports various hardware configurations including NVIDIA GPUs, AMD GPUs, and Huawei Ascend NPUs. The model supports both FP8 and BF16 inference modes."
  },
  {
    question: "Is DeepSeek open source?",
    answer: "Yes, DeepSeek is fully open source and MIT licensed. You can freely use, modify, and distribute the model for both personal and commercial purposes."
  },
  {
    question: "What are the key features of DeepSeek?",
    answer: "Key features include: automated web research, learning and reflection capabilities, continuous research iterations, comprehensive report generation with citations, and code writing/debugging abilities."
  }
];

export default function FAQ() {
  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <Disclosure as="div" key={index} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronUpIcon
                          className={`${open ? 'rotate-180 transform' : ''} h-6 w-6 text-gray-500`}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
} 