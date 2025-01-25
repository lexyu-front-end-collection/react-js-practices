function DummyCardImages() {
	const dummyData: any = new Array(16).fill(null).map((_, index) => (
		<div key={index} className="" >
			<img src={`https://picsum.photos/150?random=${index}`}
				className="border border-cyan-200 rounded-3xl" />
		</div>
	));

	return (
		<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
			{dummyData}
		</div>
	)
}

export default DummyCardImages;