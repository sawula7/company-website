import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import Button from './Button';
import { X, Cookie, Settings } from 'lucide-react';

export default function GDPRBanner() {
  const { gdprConsent, acceptAllCookies, acceptEssentialCookies, setCustomConsent } = useStore();
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  if (gdprConsent.given) {
    return null;
  }

  const handleSaveCustom = () => {
    setCustomConsent(analyticsEnabled, marketingEnabled);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 animate-slide-up">
      <div className="bg-white dark:bg-gray-900 border-t-2 border-primary-500 shadow-2xl">
        <div className="container-custom py-6">
          {!showCustomize ? (
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                  <Cookie className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We use cookies to enhance your browsing experience, analyze site traffic, and
                    personalize content. By clicking "Accept All", you consent to our use of
                    cookies.{' '}
                    <Link
                      to="/cookie-policy"
                      className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowCustomize(true)}
                  className="whitespace-nowrap"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Customize
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={acceptEssentialCookies}
                  className="whitespace-nowrap"
                >
                  Essential Only
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={acceptAllCookies}
                  className="whitespace-nowrap"
                >
                  Accept All
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Close customize"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Essential Cookies
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Required for the website to function properly
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded text-sm font-medium text-gray-700 dark:text-gray-300">
                    Always Active
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Analytics Cookies
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Help us understand how visitors interact with our website
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Marketing Cookies
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Used to deliver personalized advertisements
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={marketingEnabled}
                      onChange={(e) => setMarketingEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-500"></div>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="ghost" size="sm" onClick={acceptEssentialCookies}>
                  Reject All
                </Button>
                <Button variant="primary" size="sm" onClick={handleSaveCustom}>
                  Save Preferences
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
