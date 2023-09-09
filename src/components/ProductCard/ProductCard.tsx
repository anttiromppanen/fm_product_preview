import productImageMobile from "../../assets/images/image-product-mobile.jpg";
import productImageDesktop from "../../assets/images/image-product-desktop.jpg";
import cartIcon from "../../assets/images/icon-cart.svg";

function ProductCard() {
  return (
    <div className="bg-userWhite flex h-full max-w-2xl flex-col rounded-lg sm:max-h-[500px] sm:flex-row">
      <div className="sm:basis-1/2">
        <picture>
          <source media="(min-width: 640px)" srcSet={productImageDesktop} />
          <img
            src={productImageMobile}
            alt="Product"
            className="relative rounded-t-lg sm:h-full sm:rounded-none sm:rounded-l-lg"
          />
        </picture>
      </div>
      <div className="flex h-full flex-col justify-between px-5 py-5 sm:basis-1/2 sm:px-10 sm:py-10">
        <div>
          <h2 className="text-userDarkGrayishBlue text-[12px] tracking-[0.35em]">
            PERFUME
          </h2>
          <h1 className="text-userVeryDarkBlue my-3 font-fraunces text-3xl leading-8 sm:my-4">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-userDarkGrayishBlue text-sm leading-6">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfurmer-Creator for the House of CHANEL.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <p className="text-userDarkCyan font-fraunces text-4xl font-bold">
              $149.99
            </p>
            <p className="text-userDarkGrayishBlue ml-6 text-sm line-through">
              $169.99
            </p>
          </div>
          <button
            type="button"
            className="
              bg-userDarkCyan hover:bg-userVeryDarkGreen active:bg-userVeryDarkBlue 
              mt-4 flex w-full items-center justify-center gap-x-2 rounded-lg py-3 
              sm:mt-8"
          >
            <img src={cartIcon} alt="Cart icon" />
            <span className="text-userWhite">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
