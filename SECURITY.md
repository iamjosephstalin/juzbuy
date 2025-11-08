# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of Juzbuy seriously. If you discover a security vulnerability, please follow these steps:

1. **DO NOT** create a public issue on GitHub
2. Send an email to [security@your-domain.com] with:
   - A description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact assessment
   - Any suggested fixes (if available)

3. We will acknowledge receipt within 24 hours
4. We will provide a more detailed response within 72 hours
5. We will work with you to understand and resolve the issue promptly

## Security Best Practices

### For Developers
- Keep dependencies updated
- Use environment variables for sensitive data
- Implement proper input validation
- Follow secure coding practices
- Regular security audits

### For Deployment
- Use HTTPS in production
- Implement proper authentication
- Set up rate limiting
- Use security headers
- Regular backups
- Monitor logs for suspicious activity

## Current Security Measures

- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Input validation with Zod schemas
- CSRF protection through Next.js
- XSS protection
- Rate limiting configuration
- Docker security best practices

## Disclosure Policy

- We will acknowledge valid security reports
- We will provide credit for responsible disclosure (unless you prefer to remain anonymous)
- We aim to fix critical vulnerabilities within 7 days
- We will publish security advisories for major issues

Thank you for helping keep Juzbuy secure!