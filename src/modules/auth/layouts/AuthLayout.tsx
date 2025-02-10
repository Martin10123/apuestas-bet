interface AuthLayoutProps {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  description: string;
  image: string;
}

export const AuthLayout = ({
  children,
  description,
  image,
  title,
}: AuthLayoutProps) => {
  return (
    <section className="container mx-auto lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center before:content before:block before:fixed before:top-0 before:left-0 before:w-full before:h-full before:bg-tertiary before:-z-50">
      <div className="p-4">
        <figure className="flex items-center justify-center mb-8">
          <img className="size-16" src="/logobet-removebg.webp" alt="Logo" />

          <figcaption>
            <h1 className="text-green-500 font-medium text-3xl">BetAgain</h1>
          </figcaption>
        </figure>

        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-medium text-black mb-2">{title}</h2>

          <p className="text-gray-500 text-sm text-center max-w-md">
            {description}
          </p>
        </div>

        <form className="grid grid-cols-1 gap-4">{children}</form>
      </div>

      <figure className="hidden lg:block">
        <img src={image} alt="img-register" />
      </figure>
    </section>
  );
};
