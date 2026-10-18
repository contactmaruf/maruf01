import React, { useState, useEffect } from 'react';
import { ContactFormData, FormErrors } from '../types';
import { CheckCircleIcon } from '../components/Icons';

interface ContactPageProps {
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    service: initialService || 'AI Solutions & Automation',
    budget: '$5,000 - $10,000',
    message: '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required.';
    } else if (!emailRegex.test(formData.workEmail.trim())) {
      newErrors.workEmail = 'Please provide a valid work email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project or goal.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters of detail.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);

    // Simulated network dispatch for client-side demo mode
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        workEmail: '',
        companyName: '',
        service: initialService || 'AI Solutions & Automation',
        budget: '$5,000 - $10,000',
        message: '',
      });
      setErrors({});
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white">
      
      {/* Header Banner */}
      <section className="py-14 sm:py-20 bg-[#F8F9FB] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E50914]">Get In Touch</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight text-balance">
            Let's Talk About Your <span className="text-[#E50914]">Next Big Idea.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#626262] leading-relaxed max-w-2xl mx-auto">
            Tell us about your goals, your challenges, and what you want to build. Let's explore how Maruf Scale Labs can help.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white border border-[#E7E7E7] rounded-3xl p-6 sm:p-10 shadow-xs">
              
              {/* Demo Mode Notice */}
              <div className="mb-6 p-4 rounded-xl bg-[#F8F9FB] border border-[#E7E7E7] text-[#171717] text-xs">
                <span className="font-bold text-[#E50914]">Demo Mode:</span> Client-side validation is active. To deliver inquiries in production, point this form to your designated secure backend endpoint without exposing private API credentials in client code.
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm">Inquiry Processed (Demo Simulation)</h4>
                    <p className="text-xs mt-1 text-emerald-800">
                      Thank you for submitting your project request. In a live environment, a confirmation notification is delivered directly to our team inbox.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-2 text-xs font-bold text-emerald-700 underline cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                    Full Name <span className="text-[#E50914]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    placeholder="e.g. Sarah Jenkins"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#171717] transition-all focus:outline-none focus:ring-2 focus:ring-[#E50914] min-h-[44px] ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#E7E7E7] hover:border-gray-400'
                    }`}
                  />
                  {errors.fullName && <p id="fullName-error" className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>}
                </div>

                {/* Email & Company (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="workEmail" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                      Work Email <span className="text-[#E50914]">*</span>
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      aria-invalid={!!errors.workEmail}
                      aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
                      placeholder="sarah@company.com"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#171717] transition-all focus:outline-none focus:ring-2 focus:ring-[#E50914] min-h-[44px] ${
                        errors.workEmail ? 'border-red-500 bg-red-50/20' : 'border-[#E7E7E7] hover:border-gray-400'
                      }`}
                    />
                    {errors.workEmail && <p id="workEmail-error" className="mt-1 text-xs text-red-600 font-medium">{errors.workEmail}</p>}
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                      Company Name <span className="text-gray-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Company Inc."
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-[#E7E7E7] hover:border-gray-400 bg-white text-sm text-[#171717] transition-all focus:outline-none focus:ring-2 focus:ring-[#E50914] min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Service & Budget Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-[#E7E7E7] hover:border-gray-400 bg-white text-sm text-[#171717] transition-all focus:outline-none focus:ring-2 focus:ring-[#E50914] min-h-[44px]"
                    >
                      <option value="AI Solutions & Automation">AI Solutions &amp; Automation</option>
                      <option value="Digital Marketing & Growth">Digital Marketing &amp; Growth</option>
                      <option value="Video Production & Creative Content">Video Production &amp; Creative</option>
                      <option value="Website Design & Development">Website Design &amp; Development</option>
                      <option value="Integrated / Multiple Services">Integrated / Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                      Estimated Budget <span className="text-gray-400 font-normal lowercase">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-[#E7E7E7] hover:border-gray-400 bg-white text-sm text-[#171717] transition-all focus:outline-none focus:ring-2 focus:ring-[#E50914] min-h-[44px]"
                    >
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000+">$25,000+</option>
                      <option value="To Be Discussed">To Be Discussed</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                    Project Details <span className="text-[#E50914]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    placeholder="Provide a brief overview of your business goals, timeline, and current pain points..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#171717] transition-all focus:outline-none focus:ring-2 focus:ring-[#E50914] ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#E7E7E7] hover:border-gray-400'
                    }`}
                  />
                  {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E50914] hover:bg-[#C6000D] disabled:bg-gray-400 text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider shadow-sm hover:shadow-lg hover:shadow-red-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Processing Inquiry...</span>
                    </>
                  ) : (
                    <span>Send Project Inquiry</span>
                  )}
                </button>

              </form>
            </div>

            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#F8F9FB] border border-[#E7E7E7] rounded-3xl p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-bold text-[#171717]">
                  Communication Channels
                </h3>
                <p className="text-sm text-[#626262] leading-relaxed">
                  We look forward to reviewing your inquiry. Strategic production contact channels are organized below:
                </p>

                <div className="space-y-3.5 pt-1">
                  <div className="p-4 bg-white rounded-xl border border-[#E7E7E7]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      Business Email
                    </span>
                    <span className="text-sm font-semibold text-[#171717] font-mono select-all">
                      contact@marufscalelabs.com
                    </span>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-[#E7E7E7]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      Global Location
                    </span>
                    <span className="text-sm font-semibold text-[#171717]">
                      Remote &bull; Distributed Agency Operations
                    </span>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-[#E7E7E7]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      Operating Hours
                    </span>
                    <span className="text-sm font-semibold text-[#171717]">
                      Monday &ndash; Friday &bull; 09:00 &ndash; 18:00 UTC
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust statement */}
              <div className="p-6 sm:p-8 border border-[#E7E7E7] rounded-3xl bg-white text-center space-y-2 shadow-xs">
                <p className="text-base sm:text-lg font-bold text-[#171717]">
                  “Great work starts with a conversation.”
                </p>
                <p className="text-xs text-[#626262]">
                  No high-pressure sales calls. Just practical technical and creative roadmaps.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
