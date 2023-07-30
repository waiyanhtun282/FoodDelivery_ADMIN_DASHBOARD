import { useRoutes } from "react-router-dom";
import { paths } from "./paths";
import { lazy } from "react";

//

const AdminLayout = lazy(() => import("../components/layout/AdminLayout"));

// for dashboard
const DashboardPage = lazy(() =>
  import("../pages/protected/dashboard/Dashboard")
);

// for order
const OrderPage = lazy(() => import("../pages/protected/order/Order"));

// for customer
const CustomerPage = lazy(() => import("../pages/protected/customer/Customer"));

// for product
const ProductPage = lazy(() => import("../pages/protected/product/Product"));
const CreateProduct = lazy(() =>
  import("../pages/protected/product/CreateProduct")
);

// for category
const CategoryPage = lazy(() => import("../pages/protected/category/Category"));
const CreateCategory = lazy(() =>
  import("../pages/protected/category/CreateCategory")
);

// for promotion
const PromotionPage = lazy(() =>
  import("../pages/protected/promotion/Promotion")
);
const CreatePromotion = lazy(() =>
  import("../pages/protected/promotion/CreatePromotion")
);

// for giveaway
const GiveawayPage = lazy(() => import("../pages/protected/giveaway/Giveaway"));
const CreateGiveaway = lazy(() =>
  import("../pages/protected/giveaway/CreateGiveaway")
);

// for slideshow
const SlideShowPage = lazy(() =>
  import("../pages/protected/slideShow/SlideShow")
);
const CreateSlideShow = lazy(() =>
  import("../pages/protected/slideShow/CreateSlideShow")
);

// for blog
const BlogPage = lazy(() => import("../pages/protected/blog/Blog"));
const CreateBlog = lazy(() => import("../pages/protected/blog/CreateBlog"));

// for extra data
const ExtraDataPage = lazy(() =>
  import("../pages/protected/extraData/ExtraData")
);
const CreateExtraData = lazy(() =>
  import("../pages/protected/extraData/CreateExtraData")
);

// for request
const RequestPage = lazy(() => import("../pages/protected/request/Request"));

// for setting
const SettingPage = lazy(() => import("../pages/protected/setting/Setting"));

export const Router = () => {
  return useRoutes([
    {
      path: paths.dashboard,
      element: <AdminLayout />,
      children: [
        {
          path: paths.dashboard,
          element: <DashboardPage />,
        },
        {
          path: paths.order,
          element: <OrderPage />,
        },
        {
          path: paths.customer,
          element: <CustomerPage />,
        },
        {
          path: paths.product,
          element: <ProductPage />,
        },
        {
          path: paths.createProduct,
          element: <CreateProduct />,
        },
        {
          path: paths.category,
          element: <CategoryPage />,
        },
        {
          path: paths.createCategory,
          element: <CreateCategory />,
        },
        {
          path: paths.promotion,
          element: <PromotionPage />,
        },
        {
          path: paths.createPromotion,
          element: <CreatePromotion />,
        },
        {
          path: paths.giveaway,
          element: <GiveawayPage />,
        },
        {
          path: paths.createGiveaway,
          element: <CreateGiveaway />,
        },
        {
          path: paths.slidShow,
          element: <SlideShowPage />,
        },
        {
          path: paths.createSlideShow,
          element: <CreateSlideShow />,
        },
        {
          path: paths.blog,
          element: <BlogPage />,
        },
        {
          path: paths.createBlog,
          element: <CreateBlog />,
        },
        {
          path: paths.extraData,
          element: <ExtraDataPage />,
        },
        {
          path: paths.createExtraData,
          element: <CreateExtraData />,
        },
        {
          path: paths.request,
          element: <RequestPage />,
        },
        {
          path: paths.setting,
          element: <SettingPage />,
        },
      ],
    },
  ]);
};
