import BtnExample from "@/components/libraries/cva/BtnExample";
import Hero from "@/components/libraries/cva/Hero";
import { BtnCVA, ButtonProps } from "@/components/libraries/cva/BtnCVA";


const sizes: ButtonProps["size"][] = ["sm", "md", "lg", "xl", "xl"];
const buttonOptions: ButtonProps["intent"][] = ["primary", "outline", "ghost"];


function CVA() {
	return (
		<>
			<div className="mx-auto grid place-items-center gap-12 mt-16">
				<BtnExample variant="primary" size="7xl">
					Without CVA + TW-MERGE
				</BtnExample>
				<BtnExample variant="secondary" size="xl">
					Without CVA + TW-MERGE
				</BtnExample>
				<BtnExample variant="tertiary" size="lg">
					Without CVA + TW-MERGE
				</BtnExample>
				<BtnExample variant="primary" size="md" className="">
					Without CVA + TW-MERGE
				</BtnExample>
				<BtnExample variant="secondary" size="sm" className="text-7xl">
					<code>
						&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-1 px-2 text-sm text-7xl"&gt; Conflict &lt;/button&gt;
					</code>
				</BtnExample>
			</div>

			<hr className="my-8" />

			<div className="bg-theme-base text-theme-900 text-center">
				<div className="grid min-h-screen place-content-center p-6 lg:p-8 relative z-0 overflow-hidden">
					<Hero />
					<div className="mx-auto">
						<div className="grid place-items-center gap-12 mt-16">
							{buttonOptions.map((option) => (
								<div
									className="flex gap-6 justify-center items-center"
									key={option}
								>
									<div className="grid gap-2">
										<h2 className="text-xl tracking-wide font-bold uppercase">
											{option} Buttons
										</h2>
										<div className="flex items-center justify-center gap-4 flex-wrap">
											{sizes.map((size, index) => (
												<BtnCVA
													size={size}
													intent={option}
													disabled={index === 4}
													key={size}
												>
													<span>Learn more</span>
													<span>&rarr;</span>
												</BtnCVA>
											))}
										</div>
									</div>
									<div className="grid gap-2">
										<h2 className="text-xl tracking-wide font-bold uppercase">
											{option} Icon
										</h2>
										<div className="flex items-center justify-center gap-4 flex-wrap">
											{sizes.map((size, index) => (
												<BtnCVA
													size={size}
													intent={option}
													btnType={"icon"}
													disabled={index === 4}
													key={size}
												>
													<svg
														width="24"
														height="24"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fill="none"
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M5 12h14m-7-7v14"
														/>
													</svg>
												</BtnCVA>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CVA