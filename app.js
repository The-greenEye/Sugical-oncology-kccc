// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen w-full bg-[#f0f2f5]" data-name="app" data-file="app.js">
        {/* Main Container - Full width but centered content max-width for large screens */}
        <main className="w-full bg-white shadow-xl min-h-screen flex flex-col relative mx-auto">
            <div className="w-full max-w-7xl mx-auto flex flex-col">
                <Header />
                <Hero />
                <DoctorStrip />
                <div className="h-2 bg-gray-50 w-full"></div> 
                <WorkshopGIT />
                <div className="h-2 bg-gray-50 w-full"></div> 
                <WorkshopHN />
                <GoalsStrip />
                <CenterInfo />
            </div>
            <ContactFooter />
        </main>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);