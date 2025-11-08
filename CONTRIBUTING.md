# Contributing to Juzbuy

Thank you for considering contributing to Juzbuy! We welcome contributions from everyone.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/your-username/juzbuy/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce the bug
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, browser, Node.js version)

### Suggesting Features

1. Check existing [Issues](https://github.com/your-username/juzbuy/issues) and [Discussions](https://github.com/your-username/juzbuy/discussions)
2. Create a new issue with:
   - Clear title and description
   - Use case and motivation
   - Possible implementation approach
   - Any relevant examples

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test your changes**
   ```bash
   npm run dev
   npm run build
   npm run type-check
   npm run lint
   ```
5. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add new feature"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages

We use [Conventional Commits](https://conventionalcommits.org/):

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

### File Structure

- Components in `components/` directory
- Pages in `app/` directory (App Router)
- Utilities in `lib/` directory
- Types in appropriate files with `.ts` extension
- Styles in `styles/` or co-located with components

### Testing

- Write tests for new features
- Ensure existing tests pass
- Test across different browsers and devices
- Check mobile responsiveness

### Documentation

- Update README.md for significant changes
- Add JSDoc comments to functions
- Update type definitions
- Include examples in documentation

## Pull Request Guidelines

### Before Submitting

- [ ] Code follows project conventions
- [ ] Tests pass locally
- [ ] TypeScript compiles without errors
- [ ] ESLint passes without errors
- [ ] Changes are documented
- [ ] Commit messages follow convention

### Pull Request Description

Please include:
- Summary of changes
- Related issue numbers
- Breaking changes (if any)
- Screenshots for UI changes
- Testing instructions

### Review Process

1. Automated checks must pass
2. Code review by maintainers
3. Address feedback if needed
4. Squash and merge when approved

## Setting Up Development Environment

1. **Prerequisites**
   - Node.js 18+
   - npm/yarn/pnpm
   - Git

2. **Clone and install**
   ```bash
   git clone https://github.com/your-username/juzbuy.git
   cd juzbuy
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development**
   ```bash
   npm run dev
   ```

## Project Architecture

### Technology Stack
- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui
- **State Management**: React Context
- **Forms**: React Hook Form + Zod
- **Animation**: Framer Motion

### Key Concepts
- **App Router**: Next.js 14+ routing system
- **Server Components**: Default rendering strategy
- **Client Components**: For interactivity
- **Type Safety**: Comprehensive TypeScript usage

## Community

- [GitHub Discussions](https://github.com/your-username/juzbuy/discussions) for questions and ideas
- [GitHub Issues](https://github.com/your-username/juzbuy/issues) for bugs and feature requests

## Recognition

Contributors will be acknowledged in:
- README.md contributors section
- GitHub contributors page
- Release notes (for significant contributions)

Thank you for contributing to Juzbuy! 🚀