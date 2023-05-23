import React, { FC } from 'react'
import styles from '../Header.module.scss'
import styles_2 from './DropDown.module.scss'
import data from '../../../data/DownDrop.json'

export const DropDown: FC = () => {
	console.log(data)

	return (
		<div id='wrap_down' className={`${styles.wrapper}`}>
			<div className={styles_2.wrapper_sections}>
				<div className={styles_2.section_1}>
					{data.films.section_1.map(el => {
						return (
							<div key={el.id}>
								<h2 className='list__title'>{el.title}</h2>
								<nav>
									<ul>
										{el.items.map(el => {
											return (
												<li className='list__item' key={el.id}>
													<a
														href='#'
														className='list__link list__link_type_grey'
													>
														{' '}
														{el.titleItem}
													</a>
												</li>
											)
										})}
									</ul>
								</nav>
							</div>
						)
					})}
				</div>
				<div className={styles_2.section_2}>
					{data.films.section_2.map(el => {
						return (
							<nav key={el.id}>
								<ul>
									{el.items.map(el => (
										<li className='list__item' key={el.id}>
											<a href='#' className='list__link list__link_type_grey'>
												{el.titleItem}
											</a>
										</li>
									))}
								</ul>
							</nav>
						)
					})}
				</div>
				<div className={styles_2.section_3}>
					<div>
						<h2 className='list__title'>Страны</h2>
						<nav>
							<ul>
								<li className='list__item'>
									<a href='#' className='list__link list__link_type_grey'>
										Русские
									</a>
								</li>
								<li className='list__item'>
									<a href='#' className='list__link list__link_type_grey'>
										Зарубежные
									</a>
								</li>
								<li className='list__item'>
									<a href='#' className='list__link list__link_type_grey'>
										Советское кино
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div>
						<h2 className='list__title'>Годы</h2>
						<nav>
							<ul>
								<li className='list__item'>
									<a href='#' className='list__link list__link_type_grey'>
										Фильмы 2023 года
									</a>
								</li>
								<li className='list__item'>
									<a href='#' className='list__link list__link_type_grey'>
										Фильмы 2022 года
									</a>
								</li>
								<li className='list__item'>
									<a href='#' className='list__link list__link_type_grey'>
										Фильмы 2021 года
									</a>
								</li>
								<li className='list__item'>
									<a href='#' className='list__link list__link_type_grey'>
										Фильмы 2020 года
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div className=''></div>
		</div>
	)
}
