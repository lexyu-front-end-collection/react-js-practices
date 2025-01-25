import Layout from "@/components/basic/props/Layout";


function PropsChildren() {
	return (
		<Layout>
			<div className="flex flex-col h-screen">
				<div className="bg-white rounded-lg shadow p-6 flex-1">
					<h2 className="text-2xl font-bold mb-4 text-black">Welcome</h2>
					<p className="text-gray-600">
						This is a page wrapped in the layout component.
					</p>
				</div>
			</div>
		</Layout>
	);
}

export default PropsChildren;