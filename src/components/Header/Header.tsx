import { FC, useRef } from 'react'
import styles from './Header.module.scss'
import searchSvg from '../../assets/img/icons/search.svg'
import ringSvg from '../../assets/img/icons/ring.svg'
import accountSvg from '../../assets/img/icons/account.svg'
import Button from '@/components/UI/Button/Button'
import { DropDown } from './DropDown/DropDown'

const Header: FC = () => {
	const class_header = styles.header
	const class_active = styles.active

	const onChancheDownContent = () => {
		const header = document.getElementById('header_wrap')
		const nav__link = document.getElementsByClassName(styles.nav__link_down);

		for (let i = 0; i < nav__link.length; i++) {
			nav__link[i]?.addEventListener('mouseover', () => {
				header?.classList.add(class_active)
			})

			nav__link[i]?.addEventListener('mouseout', () => {
				header?.classList.remove(class_active)
			})
		}
	}
	return (
		<div className='container_2'>
			<header id='header_wrap' onMouseEnter={onChancheDownContent}>
				<div className={class_header}>
					<div className={styles.header__left}>
						<nav className={styles.nav}>
							<a className={styles.nav__link}>
								<img
									className={styles.logotype}
									src='https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg'
								></img>
							</a>
							<ul className={styles.nav__list}>
								<li className={styles.nav__item}>
									<a className={styles.nav__link}>Мой Иви</a>
								</li>
								<li className={styles.nav__item}>
									<a className={styles.nav__link}>Что нового</a>
								</li>
								<li className={styles.nav__item_down}>
									<a className={styles.nav__link_down}>Фильмы</a>
									<DropDown />
								</li>
								<li className={styles.nav__item_down}>
									<a className={styles.nav__link_down}>Сериалы</a>
									<DropDown />
								</li>
								<li className={styles.nav__item_down}>
									<a className={styles.nav__link_down}>Мультфильмы</a>
									<DropDown />
								</li>
								<li className={styles.nav__item}>
									<a className={styles.nav__link}>TV+</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className={styles.header__right}>
						<ul className={styles.actions__list}>
							<li className={styles.actions__item}>
								<Button
									text={'Смотреть 30 дней за 1 ₽'}
									container={styles.watchButton}
								></Button>
							</li>
							<li className={styles.actions__item}>
								<Button
									text={'Поиск'}
									container={styles.searchText}
									imgLeft={searchSvg}
									imgLeftContainer={styles.searchButton}
								></Button>
							</li>
							<li className={styles.actions__item}>
								<Button
									imgLeft={ringSvg}
									imgLeftContainer={styles.ringButton}
								></Button>
							</li>
							<li className={styles.actions__item}>
								<div className={styles.buttonWrapper}>
									<Button
										imgLeft={accountSvg}
										imgLeftContainer={styles.accountButton}
									></Button>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
