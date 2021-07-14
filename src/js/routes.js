const DashboardPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/DashboardPage.vue');
const ExplorePage = () => import( /* webpackChunkName: "view-[request]" */ './pages/ExplorePage.vue');
const PortfolioPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/PortfolioPage.vue');
const CategoryPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/CategoryPage.vue');
const TokenDetailPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/TokenDetailPage.vue');
const PairDetailPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/PairDetailPage.vue');
const WrappedPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/WrappedPage.vue');
const FarmsPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/FarmsPage.vue');
const PoolsPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/PoolsPage.vue');
const LotteryPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/LotteryPage.vue');
const StatisticPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/StatisticPage.vue');
const HelpPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/HelpPage.vue');
const HelpDetailPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/HelpDetailPage.vue');
const WalletPage = () => import( /* webpackChunkName: "view-[request]" */ './pages/WalletPage.vue');

const routes =  [
    {
        path: "/",
        component: DashboardPage,
    },
    {
        path: "/explore",
        component: ExplorePage,
    },
    {
        path: "/explore/category/:category",
        component: CategoryPage,
    },
    {
        path: "/explore/token/:token",
        component: TokenDetailPage,
    },
    {
        path: "/explore/token/:token/pair/:pair",
        component: PairDetailPage,
    },
    {
        path: "/portfolio",
        component: PortfolioPage,
    },
    {
        path: "/wrapped",
        component: WrappedPage,
    },
    {
        path: "/pools",
        component: PoolsPage,
    },
    {
        path: "/farms",
        component: FarmsPage,
    },
    {
        path: "/lottery",
        component: LotteryPage,
    },
    {
        path: "/statistics",
        component: StatisticPage,
    },
    {
        path: "/help",
        component: HelpPage,
    },
    {
        path: "/help/:id",
        component: HelpDetailPage,
    },
    {
        path: "/wallet",
        component: WalletPage,
    },
];

export default routes;
