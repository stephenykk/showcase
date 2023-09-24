import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { useActions, useMounted } from '@/hooks'

import './Home.scss';
import { createLogger } from '@/utils';
import Content from './components/Content';
import ColMain from './components/ColMain';
import TestimonialSection from './components/TestimonialSection';
import TestimonialGrid from './TestimonialGrid';
import Blog from './components/Blog';
import Questions from './Questions';
import Hero from './Hero';
import { useEffect } from 'react';
import { getCategory } from '@/services';

const logger = createLogger('HomePage')

function Home() {
    const userState = useSelector<RootState, RootState['user']>(state => state.user)
    const mainState = useSelector<RootState, RootState['main']>(state => state.main)
    const dispatch = useDispatch()
    logger.info('userState:', userState, dispatch)
    const actions = useActions()
    console.log("🚀 ~ file: Home.tsx:21 ~ Home ~ actions:", actions)


    useEffect(() => {
        document.body.classList.add('home-route')
        return () => {
            document.body.classList.remove('home-route')
        }
    })

    useMounted(async () => {
        // is ready 
        if (mainState.cateTree.category_id) {
            return
        }

        const cateTree = await getCategory()
        actions.setCateTree(cateTree)
    })

    return (
        <div className='home-page'>
            <Content />

            <div className="main-container col1-layout">
                <div className="main">
                    <ColMain />
                    <TestimonialSection />
                    <TestimonialGrid />
                    <Blog />
                    <Questions />
                    <Hero />
                </div>
            </div>
        </div>
    )
}


export default Home