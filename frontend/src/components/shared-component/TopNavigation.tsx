import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import ServicesDropdown from './ServicesDropdown'; // Update the path as per your file structure
import Logo from './Logo';

const navigation = [
    { name: 'Services', href: '#', dropdown: true },
    { name: 'Available pets', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Success stories', href: '#' },
    { name: 'Articles', href: '#' },
    { name: 'Contact us', href: '#' },
]

export default function TopNavigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="h-26 w-screen">
            <header className="z-50 bg-gray-50 ">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="lg:flex-1" >
                        <Logo />
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 items-center justify-center">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                {item.dropdown ? (
                                    <ServicesDropdown />
                                ) : (
                                    <a href={item.href} className="text-md font-semibold leading-6 text-purple-950">
                                        {item.name}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-lg font-semibold leading-6 text-gray-900 bg-lime-500 py-2 px-4 rounded-md">
                            Sign in
                        </a>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Logo />
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    );
}