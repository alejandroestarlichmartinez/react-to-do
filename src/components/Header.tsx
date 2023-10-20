import { ThemeSwitcher } from "."

export const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8 md:max-w-2xl">
        <div className="flex justify-between">
          <h1 className="text-white text-3xl font-semibold tracking-[0.3em] uppercase">ToDo</h1>
          <ThemeSwitcher />
        </div>
      </header>
  )
}
