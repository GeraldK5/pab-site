'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Eventdata } from '@/app/data/data';
import Image from 'next/image';

interface WelcomeModalProps {
    maxViews?: number;
    storageKey?: string;
    delayMs?: number;
}

export default function WelcomeModal({
    maxViews = 2,
    storageKey = 'modalViewCount',
    delayMs = 8000
}: WelcomeModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [advertiseEvent, setAdvertiseEvent] = useState<typeof Eventdata[0] | null>(null);

    useEffect(() => {
        // Get the event to advertise
        const eventToShow = Eventdata.find(event => event.advertiseOnModal === true);
        setAdvertiseEvent(eventToShow || null);

        const viewCount = parseInt(localStorage.getItem(storageKey) || '0');

        if (viewCount < maxViews) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                localStorage.setItem(storageKey, (viewCount + 1).toString());
            }, delayMs);

            return () => clearTimeout(timer);
        }
    }, [maxViews, storageKey, delayMs]);

    const closeModal = () => {
        setIsOpen(false);
    };

    if (!isOpen || !advertiseEvent) {
        return null;
    }

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                onClick={closeModal}
            />

            {/* Modal */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-300">

                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-3 right-3 z-10 bg-yellow-400 hover:bg-yellow-500 rounded-full p-1.5 transition-colors"
                        aria-label="Close modal"
                    >
                        <svg className="w-2 h-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image Section */}
                    <div className="relative w-full h-40">
                        <Image
                            src={advertiseEvent.image}
                            alt={advertiseEvent.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40" />
                    </div>

                    {/* Content Section */}
                    <div className="p-4">
                        {/* Top Story Label */}
                        <p className="text-xs font-bold text-yellow-500 mb-2 uppercase tracking-wide">
                            Top Story
                        </p>

                        {/* Date */}
                        <p className="text-xs text-yellow-600 font-semibold mb-2">
                            {new Date(advertiseEvent.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </p>

                        {/* Title */}
                        <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                            {advertiseEvent.title}
                        </h2>

                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-5 line-clamp-2">
                            {advertiseEvent.text}
                        </p>

                        {/* View Story Button */}
                        <Link
                            href={`/events/event-details?event=${advertiseEvent.slug}`}
                            className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 px-4 rounded-lg transition-colors duration-200 text-center text-sm text-white"
                        >
                            View Story
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
