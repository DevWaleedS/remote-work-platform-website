import React, { useEffect } from "react";

function Questions({ activeTab }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='tab mt-5 mt-lg-0 '>
			<div className='title pe-0 pe-lg-4 m-0'>
				<h3>الأسئلة الشائعة حول برنامج الرحلة التجارية إلى دبي</h3>
			</div>
			<div className='commercial_flights_questions pt-1'>
				<div className='accordion accordion-flush' id='accordionFlushExample'>
					<div className='accordion-item'>
						<h2 className='accordion-header'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#flush-collapseOne'
								aria-expanded='false'
								aria-controls='flush-collapseOne'>
								الفندق
							</button>
						</h2>
						<div
							id='flush-collapseOne'
							className='accordion-collapse collapse'
							data-bs-parent='#accordionFlushExample'>
							<div className='accordion-body'>
								<div
									className='accordion accordion-flush'
									id='sub-accordionExample'>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingOneOne'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseOneOne'
												aria-expanded='false'
												aria-controls='collapseOneOne'>
												ماهو تصنيف الفندق ؟
											</button>
										</h2>
										<div
											id='sub-collapseOneOne'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>
												الفنادق المحجوزة مصنفة من 4 الى 5 نجوم درجة الأمان عالية
											</div>
										</div>
									</div>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingOneTwo'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseOneTwo'
												aria-expanded='false'
												aria-controls='#sub-collapseOneTwo'>
												هل الفندق قريب من المطاعم العربية ؟
											</button>
										</h2>
										<div
											id='sub-collapseOneTwo'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>نعم</div>
										</div>
									</div>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingOneThree'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseOneThree'
												aria-expanded='false'
												aria-controls='sub-collapseOneThree'>
												ما المقصود بالغرف المشتركة ؟
											</button>
										</h2>
										<div
											id='sub-collapseOneThree'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>
												هي غرفة بمساحة واسعة تتسع لشخصين بسريرين
											</div>
										</div>
									</div>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingOneFour'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseOneFour'
												aria-expanded='false'
												aria-controls='sub-collapseOneFour'>
												مالمقصود بغرفة خاصة ؟
											</button>
										</h2>
										<div
											id='sub-collapseOneFour'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>
												هي غرفة خاصة لشخص واحد
											</div>
										</div>
									</div>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingOneFive'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseOneFive'
												aria-expanded='false'
												aria-controls='sub-collapseOneFive'>
												بماذا تنصحني ؟
											</button>
										</h2>
										<div
											id='sub-collapseOneFive'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>
												انصحك باختيار الغرفة المشترك
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='accordion-item'>
						<h2 className='accordion-header'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#flush-collapseTwo'
								aria-expanded='false'
								aria-controls='flush-collapseTwo'>
								الاتصال والانترنت
							</button>
						</h2>
						<div
							id='flush-collapseTwo'
							className='accordion-collapse collapse'
							data-bs-parent='#accordionFlushExample'>
							<div className='accordion-body'>
								<div
									className='accordion accordion-flush'
									id='sub-accordionExample'>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingTwoOne'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseTwoOne'
												aria-expanded='false'
												aria-controls='collapseTwoOne'>
												هل يمكنني استخدام السعودي خارج المملكة؟
											</button>
										</h2>
										<div
											id='sub-collapseTwoOne'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>
												نعم إذا تم تفعيل خاصية التجوال
											</div>
										</div>
									</div>

									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingTwoThree'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseTwoThree'
												aria-expanded='false'
												aria-controls='sub-collapseTwoThree'>
												هل يمكنني استخراج شريحة جديدة عند الوصول؟
											</button>
										</h2>
										<div
											id='sub-collapseTwoThree'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>نعم</div>
										</div>
									</div>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingTwoFour'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseTwoFour'
												aria-expanded='false'
												aria-controls='sub-collapseTwoFour'>
												ماذا تنصحني ؟
											</button>
										</h2>
										<div
											id='sub-collapseTwoFour'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>
												انصحك بشريحة جديدة من دبي فيها انترنت
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*<div className='accordion-item'>
						<h2 className='accordion-header'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#flush-collapseThree'
								aria-expanded='false'
								aria-controls='flush-collapseThree'>
								أو قات الصلاة
							</button>
						</h2>
						<div
							id='flush-collapseThree'
							className='accordion-collapse collapse'
							data-bs-parent='#accordionFlushExample'>
							<div className='accordion-body'>
								<div
									className='accordion accordion-flush'
									id='sub-accordionExample'>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingThreeOne'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseThreeOne'
												aria-expanded='false'
												aria-controls='collapseThreeOne'>
												كيف اعرف أو قات الصلاة ؟
											</button>
										</h2>
										<div
											id='sub-collapseThreeOne'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>
												دولة الأمارات دوله مسلمة وأيضا ينصح باستخدام برامج أو قات
												الصلاة
											</div>
										</div>
									</div>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingThreeTwo'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseThreeTwo'
												aria-expanded='false'
												aria-controls='#sub-collapseThreeTwo'>
												هل يسمح بأداء الصلاة في الأماكن العامة في دبي؟
											</button>
										</h2>
										<div
											id='sub-collapseThreeTwo'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>
												لا ننصح بالصلاة في الأماكن العامة ولكن سيرتب بالبرنامج
												أداء الصلاة جماعة
											</div>
										</div>
									</div>

									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingThreeFour'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseThreeFour'
												aria-expanded='false'
												aria-controls='sub-collapseThreeFour'>
												بماذا تنصحني ؟
											</button>
										</h2>
										<div
											id='sub-collapseThreeFour'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>
												تحميل برامج أو قات الصلاة والقبلة واخذ سجادة ضمن امتعتك
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>*/}
					<div className='accordion-item'>
						<h2 className='accordion-header'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#flush-collapseFour'
								aria-expanded='false'
								aria-controls='flush-collapseFour'>
								الأسئلة العامة
							</button>
						</h2>
						<div
							id='flush-collapseFour'
							className='accordion-collapse collapse'
							data-bs-parent='#accordionFlushExample'>
							<div className='accordion-body'>
								<div
									className='accordion accordion-flush'
									id='sub-accordionExample'>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingFourOne'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseFourOne'
												aria-expanded='false'
												aria-controls='collapseFourOne'>
												هل الموظف الحكومي يستطيع السفر إلى دبي ؟
											</button>
										</h2>
										<div
											id='sub-collapseFourOne'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>نعم</div>
										</div>
									</div>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingFourTwo'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseFourTwo'
												aria-expanded='false'
												aria-controls='#sub-collapseFourTwo'>
												هل الدورة مناسبة للرجال والنساء ومسموح الأطفال ؟
											</button>
										</h2>
										<div
											id='sub-collapseFourTwo'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>
												نعم مناسة للرجال وللنساء، يسمح للاطفال بعد موافقة ادارة
												المنصة
											</div>
										</div>
									</div>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingFourThree'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseFourThree'
												aria-expanded='false'
												aria-controls='sub-collapseFourThree'>
												هل بالإمكان الحصول على إرشادات ونصائح قبل السفر ؟
											</button>
										</h2>
										<div
											id='sub-collapseFourThree'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>نعم</div>
										</div>
									</div>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingFourFour'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseFourFour'
												aria-expanded='false'
												aria-controls='sub-collapseFourFour'>
												هل بالإمكان حمل الأدوية ؟
											</button>
										</h2>
										<div
											id='sub-collapseFourFour'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>نعم</div>
										</div>
									</div>
									<div className='accordion-item'>
										<h2 className='accordion-header' id='sub-headingFourFive'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#sub-collapseFourFive'
												aria-expanded='false'
												aria-controls='sub-collapseFourFive'>
												هل النقاب مسموح في دبي ؟
											</button>
										</h2>
										<div
											id='sub-collapseFourFive'
											className='accordion-collapse collapse'
											data-bs-parent='#sub-accordionExample'>
											<div className='accordion-body'>نعم</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Questions;
