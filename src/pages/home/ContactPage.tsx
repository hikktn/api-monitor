import React from 'react';
import { Mail, MessageSquare, Twitter } from 'lucide-react';
import siteData from '../../data/siteData.json';

const contactIcons: { [key: string]: React.ReactNode } = {
    Mail: <Mail className="w-5 h-5 text-blue-500" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-green-500" />,
    Twitter: <Twitter className="w-5 h-5 text-purple-500" />
};

export const ContactPage: React.FC = () => {
    return (
        <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        联系我
                    </h1>
                    <p className="text-xl text-gray-600">
                        让我们一起创造些什么吧
                    </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                开始对话
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        姓名
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="你的姓名"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        邮箱
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        消息
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="告诉我你的项目想法..."
                                    />
                                </div>
                                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                                    发送消息
                                </button>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                其他联系方式
                            </h3>
                            <div className="space-y-4">
                                {siteData.contactInfo.map((contact) => (
                                    <div key={contact.type} className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                            {contactIcons[contact.icon]}
                                        </div>
                                        <span className="text-gray-600">
                                            {contact.type === 'wechat' ? `微信: ${contact.value}` : contact.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 