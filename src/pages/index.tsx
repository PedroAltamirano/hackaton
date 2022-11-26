import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

import supabase from "utils/supabase";

import Button from "components/Button";

interface IProps {}

export const getStaticProps: GetStaticProps<IProps> = async () => ({
	props: {},
});

const Home = ({}: InferGetStaticPropsType<typeof getStaticProps>) => (
	<div className="bg-orange-500 w-screen h-screen p-6 flex justify-center items-center">
		<div className="bg-white rounded-md p-6 w-full">
			<div>
				<form>
					<div>
						<select id="selectvalue">
							<option>проекты</option>
							<option>резюме</option>
						</select>
					</div>
				</form>
			</div>

			<div>
				<div>
					<div>
						<div>
							<div>
								<Image src="kit2.jpg" width={32} height={32} />
								<div>
									<strong>ФИО</strong>
									(компания)
								</div>
							</div>
						</div>
						<div>
							<div>текст</div>
						</div>
						<div>
							<button type="submit" name="add">
								оставить заявку
							</button>
							<button type="submit" name="add">
								отзывы
							</button>
							<Button title="отзывы" />
						</div>
					</div>

					<div>
						<div>
							<div>
								<img src="kit2.jpg" />
								<div>
									<strong>ФИО</strong>
									(компания)
								</div>
							</div>
						</div>
						<div>
							<div>текст</div>
						</div>
						<div>
							<button type="submit" name="add">
								оставить заявку
							</button>
							<button type="submit" name="add">
								отзывы
							</button>
						</div>
					</div>
					<div>
						<div>
							<div>
								<img src="kit2.jpg" />
								<div>
									<strong>ФИО</strong>
									(компания)
								</div>
							</div>
						</div>
						<div>
							<div>текст</div>
						</div>
						<div>
							<button type="submit" name="add">
								оставить заявку
							</button>
							<button type="submit" name="add">
								отзывы
							</button>
						</div>
					</div>
				</div>
			</div>

			<div>
				<button>
					<img src="лента.svg" alt="чат" />
				</button>
				<button>
					<img src="чаты.svg" alt="чат" />
				</button>
				<button>
					<img src="профиль.svg" alt="чат" />
				</button>
			</div>
		</div>
	</div>
);

export default Home;
