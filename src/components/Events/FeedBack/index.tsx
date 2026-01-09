'use client'

import React, { useMemo } from "react";
import { Icon } from "@iconify/react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface FeedbackEntry {
    timestamp: string;
    [key: string]: string;
}

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
    feedbackData: FeedbackEntry[];
    feedbackQuestions: string[];
    graphFields?: {
        pieChart?: number[];
        linearChart?: Array<number | { index: number; scale: { min: number; max: number } }>;
    };
    openSuggestionFields?: number[];
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
    isOpen,
    onClose,
    feedbackData,
    feedbackQuestions,
    graphFields,
    openSuggestionFields
}) => {
    if (!isOpen) return null;

    // Process data for pie charts
    const generatePieChartData = (questionIndex: number) => {
        const question = feedbackQuestions[questionIndex];
        if (!question) return [];

        const counts: { [key: string]: number } = {};
        feedbackData.forEach((entry) => {
            const answer = entry[question];
            if (answer) {
                counts[answer] = (counts[answer] || 0) + 1;
            }
        });

        return Object.entries(counts).map(([name, value]) => ({
            name,
            value
        }));
    };

    // Process data for bar charts
    const generateBarChartData = (questionIndex: number) => {
        const question = feedbackQuestions[questionIndex];
        if (!question) return [];

        const counts: { [key: string]: number } = {};
        feedbackData.forEach((entry) => {
            const answer = entry[question];
            if (answer) {
                counts[answer] = (counts[answer] || 0) + 1;
            }
        });

        return Object.entries(counts).map(([name, value]) => ({
            name,
            count: value
        }));
    };

    // Colors for charts
    const COLORS = ['#FACC15', '#3cd278', '#ff6a5b', '#ff4d7e', '#28cf91', '#6366f1'];

    // Get open suggestion fields data organized by question
    const suggestionsByQuestion = useMemo(() => {
        if (!openSuggestionFields || openSuggestionFields.length === 0) return {};

        const organized: { [key: string]: Array<{ answer: string; timestamp: string }> } = {};

        // Initialize each question
        openSuggestionFields.forEach((fieldIndex) => {
            const question = feedbackQuestions[fieldIndex];
            if (question && !organized[question]) {
                organized[question] = [];
            }
        });

        // Populate answers for each question
        feedbackData.forEach((entry) => {
            openSuggestionFields.forEach((fieldIndex) => {
                const question = feedbackQuestions[fieldIndex];
                const answer = entry[question];
                if (question && answer && answer.trim() !== '') {
                    organized[question].push({
                        answer,
                        timestamp: entry.timestamp
                    });
                }
            });
        });

        return organized;
    }, [feedbackData, openSuggestionFields, feedbackQuestions]);

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-border dark:border-dark_border p-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-darktext dark:text-white">Community Feedback</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-darktext dark:hover:text-white transition-colors"
                    >
                        <Icon icon="solar:close-circle-bold" width="32" height="32" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-12">
                    {/* Graphs Section */}
                    {(graphFields?.pieChart?.length || graphFields?.linearChart?.length) ? (
                        <div className="space-y-8">
                            <h3 className="text-xl font-bold text-darktext dark:text-white">Response Analytics</h3>

                            {/* Pie Charts */}
                            {graphFields?.pieChart && graphFields.pieChart.length > 0 && (
                                <div className="space-y-6">
                                    <h4 className="text-lg font-semibold text-darktext dark:text-white">Overview</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {graphFields.pieChart.map((questionIndex) => {
                                            const data = generatePieChartData(questionIndex);
                                            const question = feedbackQuestions[questionIndex];

                                            return (
                                                <div
                                                    key={questionIndex}
                                                    className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg border border-border dark:border-dark_border"
                                                >
                                                    <h5 className="text-sm font-semibold text-darktext dark:text-white mb-0 line-clamp-2">
                                                        {question}
                                                    </h5>
                                                    <ResponsiveContainer width="100%" height={300}>
                                                        <PieChart>
                                                            <Pie
                                                                data={data}
                                                                cx="50%"
                                                                cy="50%"
                                                                labelLine={false}
                                                                label={({ name, value }) => `${name}: ${value}`}
                                                                outerRadius={80}
                                                                fill="#8884d8"
                                                                dataKey="value"
                                                            >
                                                                {data.map((_, index) => (
                                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                                ))}
                                                            </Pie>
                                                            <Tooltip />
                                                        </PieChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Bar Charts */}
                            {graphFields?.linearChart && graphFields.linearChart.length > 0 && (
                                <div className="space-y-6">
                                    <h4 className="text-lg font-semibold text-darktext dark:text-white">Detailed Response Distribution</h4>
                                    <div className="space-y-8">
                                        {graphFields.linearChart.map((item, idx) => {
                                            const questionIndex = typeof item === 'number' ? item : item.index;
                                            const scale = typeof item === 'number' ? undefined : item.scale;
                                            const data = generateBarChartData(questionIndex);
                                            const question = feedbackQuestions[questionIndex];

                                            return (
                                                <div
                                                    key={idx}
                                                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-border dark:border-dark_border"
                                                >
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div>
                                                            <h5 className="text-sm font-semibold text-darktext dark:text-white">
                                                                {question}
                                                            </h5>
                                                            {scale && (
                                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                                    Scale: {scale.min} (Least Likely) to {scale.max} (Most Likely)
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <ResponsiveContainer width="100%" height={200}>
                                                        <BarChart data={data}>
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="name" stroke="currentColor" />
                                                            <YAxis stroke="currentColor" />
                                                            <Tooltip
                                                                contentStyle={{
                                                                    backgroundColor: '#1f2937',
                                                                    border: 'none',
                                                                    borderRadius: '8px',
                                                                    color: '#fff'
                                                                }}
                                                            />
                                                            <Bar dataKey="count" fill="#FACC15" radius={[8, 8, 0, 0]} />
                                                        </BarChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : null}


                    {/* {Object.keys(suggestionsByQuestion).length > 0 && (
                        <div className="space-y-4 border-t border-border dark:border-dark_border pt-6">
                            <h3 className="text-xl font-bold text-darktext dark:text-white">What People Are Saying</h3>

                            <div className="space-y-4">
                                {Object.entries(suggestionsByQuestion).map(([question, answers], qIdx) => (
                                    answers.length > 0 && (
                                        <div key={qIdx} className="bg-gray-50 dark:bg-gray-800/50 border border-border dark:border-dark_border rounded-lg p-3">
                                           
                                            <h4 className="text-sm font-semibold text-darktext dark:text-white mb-3">
                                                {question}
                                            </h4>

                                            <div className="space-y-2">
                                                {answers.map((item, aIdx) => (
                                                    <div key={aIdx} className="bg-white dark:bg-gray-900 p-2 rounded border border-border dark:border-dark_border/50">
                                                        <div className="flex items-start justify-between gap-2">
                                                            <p className="text-xs text-darktext dark:text-white/80 flex-1 leading-snug">
                                                                "{item.answer}"
                                                            </p>
                                                            <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap ml-2">
                                                                {item.timestamp}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                                {answers.length} response{answers.length !== 1 ? 's' : ''}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    )}

                    {Object.keys(suggestionsByQuestion).length === 0 && !graphFields?.pieChart?.length && !graphFields?.linearChart?.length && (
                        <div className="text-center py-12">
                            <Icon icon="mdi:inbox" width="48" height="48" className="mx-auto text-gray-400 mb-4" />
                            <p className="text-gray-500 dark:text-gray-400">No feedback data available</p>
                        </div>
                    )} */}
                </div>

                {/* Footer */}
                <div className="border-t border-border dark:border-dark_border p-6 flex justify-center">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;
