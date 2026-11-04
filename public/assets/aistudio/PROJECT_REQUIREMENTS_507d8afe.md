# Digi Wedding Invite
## Product Requirements & Technical Implementation Specification

**Product type:** Full-stack Digital Wedding Invitation SaaS  
**Development approach:** Cursor + VS Code  
**Target:** Commercial production-ready platform  
**Design direction:** Traditional Indian luxury  
**Repository:** `digi-wedding-invite`

---

# 1. Product Vision

Digi Wedding Invite is a digital wedding invitation platform that allows customers to discover, purchase, personalize, publish and share beautiful wedding invitation websites.

The platform will provide:
- Ready-made wedding invitation templates.
- Individual wedding websites with unique URLs.
- Personalized couple and family information.
- Wedding event schedules.
- Photo galleries and background music.
- Google Maps venue integration.
- WhatsApp sharing.
- Guest RSVP management.
- Customer dashboard.
- Admin dashboard.
- Online payments.

The system must support multiple customers and multiple wedding websites without requiring a separate codebase for each customer.

# 2. User Roles

## A. Guest (Public visitor)
- Browse the homepage.
- View invitation templates.
- Preview sample invitations.
- Read published wedding websites.
- View events and venues.
- Submit RSVP responses.
- Share invitations.

## B. Customer
- Register and log in.
- Purchase templates.
- View order history.
- Create and edit wedding details.
- Upload wedding photos.
- Add wedding events.
- Customize available design settings.
- Preview invitation websites.
- Publish or unpublish websites.
- Copy and share invitation URLs.
- View RSVP responses.

## C. Administrator
- Access protected admin dashboard.
- View business analytics.
- Manage customers.
- Create, edit and deactivate templates.
- Manage wedding websites.
- Manage orders and payments.
- Manage pricing and promotional offers.
- View RSVP reports.
- Manage platform settings.

# 3. Functional Requirements

## FR-01: Homepage
- Traditional Indian luxury visual identity.
- Responsive navigation.
- Hero section with call-to-action.
- Featured invitation templates.
- Wedding categories.
- How-it-works section.
- Features and benefits.
- Pricing section.
- Testimonials.
- FAQ section.
- Footer with contact and legal links.

## FR-02: Template Management
- Display all available templates.
- Filter by category and style.
- Search templates.
- Display template price.
- Display preview images.
- Provide live demo links.
- Allow admin to add and update templates.

Initial categories:
- Wedding.
- Engagement.
- Haldi.
- Mehendi.
- Reception.
- Birthday.
- Anniversary.
- Housewarming.

## FR-03: Template Preview
- Full-page template preview.
- Desktop and mobile previews.
- Sample couple details.
- Events and gallery.
- Music preview where licensed music is available.
- Purchase call-to-action.

## FR-04: Authentication
- Customer registration.
- Login and logout.
- Email verification.
- Password recovery.
- Protected customer dashboard.
- Protected administrator dashboard.
- Role-based authorization.

## FR-05: Wedding Editor
Customers must be able to edit:

**Couple information**
- Bride's name.
- Groom's name.
- Couple photograph.
- Wedding date and time.

**Family information**
- Bride's parents.
- Groom's parents.
- Family messages.

**Events**
- Event name.
- Date and time.
- Venue.
- Description.
- Event image.

**Gallery**
- Upload photos.
- Delete photos.
- Reorder photos.

**Customization**
- Available color palettes.
- Typography options.
- Background design.
- Optional background music.
- Custom welcome message.

## FR-06: Wedding Website Generator
- Generate a unique URL for every wedding.
- Load the correct template dynamically.
- Fetch wedding information from the database.
- Display only published invitations.
- Support responsive mobile and desktop layouts.
- Provide social sharing metadata and preview images.

Example:
`digiweddinginvite.in/w/rahul-weds-priya`

## FR-07: RSVP Management
- Guest name.
- Guest contact information (optional).
- Number of attendees.
- Attendance confirmation.
- Optional message.
- RSVP submission date.
- Customer-facing RSVP report.

## FR-08: Payments
- Razorpay integration.
- Server-side order creation.
- Payment signature verification.
- Webhook verification.
- Transaction reference storage.
- Payment status tracking.
- Duplicate payment prevention.
- Refund status support.

## FR-09: Admin Management
- Analytics dashboard.
- Customer management.
- Template management.
- Wedding management.
- Order management.
- Payment records.
- RSVP reports.
- Pricing configuration.

## FR-10: WhatsApp Sharing
- Generate a shareable invitation URL.
- Prepopulate a WhatsApp message.
- Provide copy-link functionality.
- Include wedding couple names in the message.

# 4. Non-Functional Requirements

- Mobile-first responsive interface.
- Secure authentication and authorization.
- Supabase Row Level Security.
- Optimized image delivery.
- Fast page loading.
- SEO-friendly public invitation pages.
- Accessible forms and controls.
- Input validation.
- Secure file uploads.
- Unique wedding slugs.
- Database backups.
- Error handling and logging.
- Maintainable modular code.
- Production-ready environment configuration.

# 5. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Icons | Lucide React |
| Animation | Framer Motion |
| Backend | Next.js Route Handlers / Server Actions |
| Database | Supabase PostgreSQL |
| Authentication | Supabase Auth |
| Storage | Supabase Storage |
| Payment | Razorpay |
| Email | Resend |
| Deployment | Vercel |
| Version Control | Git + GitHub |

Use compatible stable package versions at project initialization. Do not install unnecessary dependencies.

# 6. System Architecture

The application will have four main layers.

### Presentation Layer
- Public website.
- Template gallery.
- Template preview.
- Customer dashboard.
- Admin dashboard.
- Public wedding pages.

### Application Layer
- Authentication services.
- Template services.
- Wedding management services.
- Order services.
- Payment services.
- RSVP services.
- Upload services.

### Data Layer
- Supabase PostgreSQL.
- Supabase Storage.
- Supabase Auth.

### External Integrations
- Razorpay.
- Resend.
- Google Maps links.
- WhatsApp sharing.

# 7. Database Schema

Create the following PostgreSQL tables.

### profiles
- id (UUID, references auth.users)
- full_name
- email
- phone
- role (customer/admin)
- created_at
- updated_at

### templates
- id (UUID)
- name
- slug
- description
- category
- thumbnail_url
- preview_url
- price
- is_active
- theme_config (JSONB)
- created_at

### weddings
- id (UUID)
- user_id
- template_id
- slug
- bride_name
- groom_name
- bride_parents (JSONB)
- groom_parents (JSONB)
- wedding_date
- welcome_message
- cover_image
- theme_config (JSONB)
- background_music_url
- status (draft/published/unpublished)
- created_at
- updated_at

### events
- id (UUID)
- wedding_id
- title
- description
- event_date
- venue_name
- venue_address
- map_url
- image_url
- display_order

### gallery
- id (UUID)
- wedding_id
- image_url
- caption
- display_order

### orders
- id (UUID)
- user_id
- template_id
- wedding_id
- amount
- currency
- order_status
- created_at

### payments
- id (UUID)
- order_id
- razorpay_order_id
- razorpay_payment_id
- signature_verified
- amount
- payment_status
- created_at

### guests
- id (UUID)
- wedding_id
- name
- phone
- email

### rsvps
- id (UUID)
- wedding_id
- guest_id (nullable)
- guest_name
- attendees_count
- attendance_status
- message
- created_at

All tables must include appropriate constraints, indexes, timestamps and foreign keys. Use unique constraints for wedding slugs and payment references.

# 8. Application Routes

### Public
- `/`
- `/templates`
- `/templates/[slug]`
- `/pricing`
- `/about`
- `/contact`
- `/faq`
- `/privacy`
- `/terms`
- `/w/[slug]`

### Authentication
- `/login`
- `/register`
- `/forgot-password`

### Customer
- `/dashboard`
- `/dashboard/orders`
- `/dashboard/weddings`
- `/dashboard/weddings/[id]`
- `/dashboard/weddings/[id]/edit`
- `/dashboard/rsvps`

### Administrator
- `/admin`
- `/admin/customers`
- `/admin/templates`
- `/admin/orders`
- `/admin/weddings`
- `/admin/payments`
- `/admin/settings`

# 9. API Design

Use server-side Route Handlers for operations that require APIs.

Suggested endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/templates` | List active templates |
| GET | `/api/templates/[slug]` | Get template details |
| POST | `/api/weddings` | Create wedding |
| GET | `/api/weddings/[id]` | Fetch authorized wedding |
| PATCH | `/api/weddings/[id]` | Update wedding |
| POST | `/api/weddings/[id]/publish` | Publish wedding |
| POST | `/api/uploads` | Upload media |
| POST | `/api/orders` | Create order |
| POST | `/api/payments/verify` | Verify payment |
| POST | `/api/webhooks/razorpay` | Process payment webhook |
| POST | `/api/rsvp` | Submit guest RSVP |
| GET | `/api/weddings/[id]/rsvps` | Get authorized RSVP list |

Public endpoints must expose only the minimum information needed.

# 10. Security Requirements

- Enable RLS on all customer-owned data tables.
- Customers can access only their own private records.
- Admin permissions must be checked on the server.
- Never expose Supabase service-role keys in browser code.
- Never trust client-side payment success.
- Verify payment signatures and webhook signatures.
- Validate all uploaded file types and sizes.
- Restrict storage access.
- Rate-limit public RSVP and authentication-sensitive endpoints.
- Sanitize user-generated content.
- Use environment variables for secrets.
- Avoid storing unnecessary guest personal information.

# 11. Visual Design System

### Color palette

| Name | Hex |
|---|---|
| Deep Maroon | #5B1020 |
| Royal Maroon | #7B1E2B |
| Antique Gold | #C6A15B |
| Light Gold | #E6C98A |
| Ivory | #FFF8ED |
| Warm White | #FFFFFF |
| Dark Text | #33241F |

### Design direction
- Traditional Indian wedding aesthetics.
- Premium and elegant presentation.
- Decorative floral borders.
- Subtle mandala and paisley-inspired motifs.
- Gold dividers and ornamental accents.
- Rich maroon hero sections.
- Ivory content backgrounds.
- Elegant serif headings.
- Readable sans-serif body text.
- Subtle animations.

Avoid excessive gradients, excessive shadows, cluttered layouts and overly decorative text.

# 12. Project Folder Structure

```text
digi-wedding-invite/
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── templates/
│   │   ├── pricing/
│   │   ├── login/
│   │   ├── register/
│   │   ├── dashboard/
│   │   ├── admin/
│   │   ├── w/[slug]/
│   │   └── api/
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── templates/
│   │   ├── wedding/
│   │   ├── dashboard/
│   │   └── ui/
│   ├── lib/
│   │   ├── supabase/
│   │   ├── payments/
│   │   └── utils/
│   ├── services/
│   ├── types/
│   └── config/
├── supabase/
│   ├── migrations/
│   └── seed.sql
├── .env.example
├── package.json
├── README.md
└── tsconfig.json
```

# 13. Implementation Phases

### Phase 1 – Frontend Foundation
- Project initialization.
- Design system.
- Homepage.
- Navigation and footer.
- Template gallery.
- Template preview.
- Pricing page.
- Responsive layout.

### Phase 2 – Backend Foundation
- Supabase connection.
- Database schema.
- Authentication.
- User profiles.
- RLS policies.
- Storage configuration.

### Phase 3 – Customer Dashboard
- Dashboard overview.
- Wedding creation.
- Wedding editor.
- Event manager.
- Gallery manager.
- Live preview.

### Phase 4 – Template Engine
- Reusable invitation components.
- Theme configuration.
- Dynamic wedding routing.
- Publishing workflow.

### Phase 5 – Admin Dashboard
- Customer management.
- Template management.
- Order management.
- Analytics.

### Phase 6 – Payments and Guest Features
- Razorpay.
- Payment verification.
- Webhooks.
- RSVP system.
- WhatsApp sharing.
- Email notifications.

### Phase 7 – Production Launch
- Security audit.
- Responsive testing.
- SEO.
- Performance optimization.
- Deployment.
- Custom domain.
- Production testing.

# 14. Phase 1 Acceptance Criteria

Phase 1 is complete when:

1. Homepage works on desktop, tablet and mobile.
2. Navigation links work.
3. Template cards display consistent information.
4. Template filters and search work using mock data.
5. Template previews open correctly.
6. Pricing cards display correctly.
7. Login and registration screens are designed.
8. Dashboard UI is available with mock data.
9. Admin dashboard UI is available with mock data.
10. No broken images or nonfunctional buttons.
11. No horizontal overflow on mobile.
12. Code is reusable and TypeScript errors are resolved.

**Important:** Do not claim the application has real authentication, payment processing or database functionality during Phase 1. Those will be implemented in later phases.

---

# 15. Project Completion Definition

The project will be considered commercially ready only when all core workflows work end-to-end:

- A customer can register.
- A customer can purchase a template.
- A verified payment creates the appropriate order entitlement.
- The customer can customize a wedding website.
- The customer can publish a unique invitation.
- Guests can open the public invitation.
- Guests can submit RSVP responses.
- Customers can view their RSVP reports.
- Administrators can manage the platform securely.

The application must be tested with multiple customer accounts and multiple wedding websites before launch.
