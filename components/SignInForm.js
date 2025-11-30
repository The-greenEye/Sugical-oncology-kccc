function SignInForm() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    whatsapp: '',
    jobTitle: '',
    email: '',
    image: null,
    workshopType: '' // added new field
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);

  const eventOptions = [
    "ورشة عمل اورام الرأس و الرقبة",
    "ورشة عمل اورام الجهاز الهضمي",
    "ورشة عمل اورام و تحميل الثدي",
    "مؤتمر",
    "أخرى"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const data = new FormData();
      data.append('firstName', formData.firstName);
      data.append('lastName', formData.lastName);
      data.append('whatsapp', formData.whatsapp);
      data.append('jobTitle', formData.jobTitle);
      data.append('email', formData.email);
      // append new field
      data.append('workshopType', formData.workshopType || '');
      if (formData.image) {
        data.append('image', formData.image);
      }

      const res = await fetch('https://formspree.io/f/mpwvzork', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: data
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || 'Submission failed');
      }

      setSubmitted(true);
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    } catch (err) {
      setError(err.message || 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  };

  try {
    if (submitted) {
      return (
        <div className="container mx-auto max-w-md px-6 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12 fade-in">
            <div className="icon-check-circle text-6xl text-green-500 mb-6"></div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Registration Successful!
            </h2>
            <p className="text-[var(--text-secondary)]">
              Thank you for registering. We'll contact you soon.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="container mx-auto max-w-2xl px-6" data-name="signin-form" data-file="components/SignInForm.js">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <a href="index.html" className="inline-block mb-4">
              <div className="icon-arrow-left text-2xl text-[var(--primary-color)]"></div>
            </a>
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
              Workshop Registration
            </h1>
            <p className="text-[var(--text-secondary)]">
              Join us in advancing breast cancer surgical care
            </p>
          </div>

          {/* remove action+method or keep for fallback; JS handles POST */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Job Title *
              </label>
              <input
                type="text"
                name="jobTitle"
                required
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder="e.g., Surgeon, Nurse, Medical Student"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:outline-none transition-colors"
              />
            </div>

            {/* New select field */}
            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
               Type of effectiveness *
              </label>
              <select
                name="workshopType"
                value={formData.workshopType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:outline-none transition-colors"
              >
                <option value="">Type of effectiveness</option>
                {eventOptions.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                Profile Photo (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-purple-50 file:text-[var(--primary-color)] hover:file:bg-purple-100"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Complete Registration'}
            </button>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('SignInForm component error:', error);
    return null;
  }
}
