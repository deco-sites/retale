import type { ImageWidget } from "apps/admin/widgets.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  logo?: ImageWidget;
  title?: string;
  /** @format textarea */
  headline?: string;
  cta?: string;
}

export default function Hero({ title, logo, headline, cta }: Props) {
  return (
    <div class="flex justify-center items-center hero min-h-screen bg-[#FAFAFA] text-[#313639]">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-lg space-y-10">
          <img src={logo} alt="retale logo" class="mx-auto w-80" />
          <div>
            <h1 class="mb-2 text-3xl font-bold">{title}</h1>
            <p>{headline}</p>
          </div>
          <button class="hover:scale-105 duration-200 py-2 px-4 rounded-full font-bold text-[#fff] bg-gradient-to-r from-[#02F67C] to-[#3FB8A1]">{cta}</button>
        </div>
      </div>
    </div>
  );
}
