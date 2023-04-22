import React, { FunctionComponent } from 'react'
import { LayoutProps } from './Layout.props'
import styles from './Layout.module.scss';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { ScrollToTop } from 'react-simple-scroll-up';

export const Layout = ({ children, className, ...props}:LayoutProps):JSX.Element => {
  return (
    <div className={styles.layout}>
        <Header/>
        <div className={styles.body}>{children}</div>
        <Footer/>
        <ScrollToTop bgColor='blue'/>
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>> ( Component: FunctionComponent<T>) => {
    return function withLayoutComponent( props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}