import Header from "@/components/basic/props/Header";
import Footer from "@/components/basic/props/Footer";

interface LayoutProps {
	children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
	return (
		<div className="min-h-screen bg-gray-100">
			<Header />
			<main className="container mx-auto px-4 py-8">
				{children}
			</main>
			<Footer />
		</div>

	);
}

export default Layout;