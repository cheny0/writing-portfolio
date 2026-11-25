---
title: "How Stripe and GitHub approach product and task-oriented documentation"
description: "A comparison of how Stripe and GitHub structure developer documentation and how product characteristics influence information architecture."
slug: "product-and-task-oriented-documentation"
subtitle: "Explore how product characteristics, user goals, and content models shape large-scale developer documentation."
---

# How Stripe and GitHub approach product and task-oriented documentation

Developer documentation needs to help users discover relevant capabilities, understand how they work, and accomplish their goals. But how should it be organized when products differ in purpose, complexity, and the way users interact with them?

Stripe and GitHub offer two interesting examples. Stripe connects users' established business requirements with the payment capabilities needed to support them. GitHub, on the other hand, provides an interconnected ecosystem of development tools, where users need to understand both individual features and how they work together.

Their documentation reflects these differences. By comparing their approaches to navigation, information architecture, and content models, we can explore how product characteristics influence documentation design and why different products may require different organizational approaches.

## Stripe: Connecting business goals with product capabilities

Stripe provides payment infrastructure that businesses integrate into their existing operations. Users typically approach its documentation with established business requirements, such as accepting payments, managing subscriptions, or handling refunds.

They may know what they want to accomplish without knowing which Stripe product or API they need.

Stripe's documentation supports two discovery paths.

### Start with a use case

The **Get started** section presents common goals, including:

- Accept payments online.
- Collect payments with invoices.
- Accept in-person payments.
- Sell subscriptions.
- Offer usage-based pricing.
- Set up a customer portal.

Users can start with their business requirements rather than learning Stripe's product structure first.

### Explore by product

The **Browse by product** section provides another entry point, with categories such as:

- Payments
- Revenue
- Risk
- Data
- Embedded finance
- Money management
- Prebuilt components

This approach helps users who already know which capabilities they want to explore.

Together, these two navigation paths support different information needs: use-case-based navigation helps users identify solutions, while product-based navigation helps them discover available capabilities.

### Supporting the integration journey

Stripe also provides different resources to support developers throughout an integration:

- Quickstarts and integration guides for getting started.
- Code examples and implementation guidance.
- API references for exploring endpoints and parameters.
- Testing and development resources.

These resources support users from initial solution discovery through implementation.

**The underlying principle:** Stripe connects users' existing business goals with the product capabilities and technical resources needed to achieve them.

## GitHub: Organizing an interconnected product ecosystem

GitHub supports software development and collaboration through tools for repository hosting, code review, issue tracking, project management, automation, security, and AI-assisted development.

Unlike products that primarily support established business activities, GitHub provides capabilities that span different stages of software development. Users need to understand individual features and how they work together in development workflows.

Its documentation combines product-oriented groupings, task-oriented navigation, and a shared content model.

### Discover documentation through product and topic groupings

The GitHub Docs homepage organizes content into areas such as:

- Get started
- Collaborative coding
- GitHub Copilot
- CI/CD and DevOps
- Security and code quality
- Client apps
- Project management
- Enterprise and teams
- Developers
- Community

These groupings combine product- and feature-oriented areas, such as GitHub Copilot, with broader activities, such as collaborative coding and project management.

This gives users multiple entry points based on what they want to explore.

### A consistent documentation hierarchy

GitHub publicly documents a content model that defines how its documentation is organized.

According to its [content model](https://docs.github.com/en/contributing/style-guide-and-content-model/about-the-content-model), the hierarchy has four levels:

1. **Doc set:** A collection of documentation covering a product, feature, or broader subject area.
2. **Category:** Related topics within a doc set, often organized around features or tasks.
3. **Map topic:** A narrower grouping of related articles.
4. **Article:** An individual documentation page.

For example, a simplified GitHub Actions documentation structure might look like this:

```text
GitHub Actions
├── Understanding GitHub Actions
│   ├── Concepts and terminology
│   └── How GitHub Actions works
├── Writing workflows
│   ├── Creating a workflow
│   └── Using workflow syntax
├── Managing workflows
│   ├── Monitoring workflow runs
│   └── Managing workflow permissions
└── Troubleshooting
    └── Troubleshooting workflow runs
```

*This is an illustrative structure, not a reproduction of GitHub's actual documentation sitemap.*

The hierarchy accommodates different information needs, from understanding concepts to performing tasks and troubleshooting problems.

### Task-oriented organization within product areas

GitHub's documentation is not organized solely around its content hierarchy. Categories and map topics also group articles around features and user activities.

For example, users may need to create pull requests, configure workflows, manage repository permissions, or secure repositories.

The distinction is important: the hierarchy defines where content belongs, while task-oriented navigation helps users find relevant information.

### A shared content model

GitHub also defines content types that guide how individual articles are written and structured:

- Concepts
- Reference
- How-to
- Troubleshooting
- Release notes
- Get started
- Quickstart
- Tutorial

These types describe an article's purpose rather than its position in the navigation hierarchy.

For example, a documentation area might include conceptual articles explaining how a feature works, procedural articles showing how to configure it, and reference articles listing available options.

Shared content conventions help maintain a consistent reading experience across documentation areas and make content easier to maintain.

**The underlying principle:** GitHub combines a consistent content structure with task-oriented organization to help users understand and use capabilities across a broad development ecosystem.

## Comparing the two approaches

Both Stripe and GitHub combine product-oriented and task-oriented navigation. Their differences lie mainly in how they apply these approaches to their respective products.

| Dimension | Stripe | GitHub |
|---|---|---|
| Product context | Payment infrastructure supporting established business activities | Interconnected software development and collaboration tools |
| Homepage discovery | Explicit use-case and product-based entry points | Product, feature, and activity-based groupings |
| Documentation hierarchy | Organized around product areas and associated resources | Four-level hierarchy: doc sets, categories, map topics, and articles |
| Task-oriented content | Supports business and payment workflows | Supports development and collaboration tasks |
| Content model | Integration guides, examples, API references, and other technical resources | Shared content model with defined content types |
| Main learning challenge | Identifying which capabilities support an existing business requirement | Understanding individual features and how they work together |

These are differences in emphasis, not mutually exclusive approaches. Both sites need to support users who know their goals, users who know which features they need, and users who are still learning the product.

## How product characteristics influence documentation architecture

The following observations are interpretations based on the products and their publicly available documentation, not claims about the companies' internal design decisions.

### Users' starting points influence information architecture

Stripe users often start with an established business requirement, such as accepting payments or managing subscriptions. Documentation can help them connect that requirement to the appropriate product and integration guidance.

GitHub users may approach the product differently. They might want to complete a development task without knowing which features or combination of features will help them.

For example, code review may involve pull requests, branch protection rules, and repository permissions.

This makes it useful to organize GitHub documentation around both individual capabilities and the activities users perform with them.

### Product complexity influences content organization

Both products have extensive feature sets, but their capabilities relate to one another differently.

Stripe's products support different payment and financial operations. Users need to understand which products and APIs support their integration requirements.

GitHub's features can be interconnected within broader development workflows. Users may need to understand not only individual features but also how they interact.

A consistent documentation hierarchy is particularly useful here because it gives users a predictable way to navigate different product areas.

### Documentation must support discovery and learning

Users can have different information needs:

- **Discovery:** Identifying the relevant product, feature, or solution.
- **Understanding:** Learning concepts, relationships, and technical behavior.
- **Execution:** Following instructions and references to complete tasks.

Product-based or task-based navigation alone cannot address all three needs. They work best when combined with a suitable content model and clear article structure.

## Trade-offs in documentation organization

There is no universally best way to organize developer documentation. Each approach offers benefits and introduces limitations.

### Product-oriented navigation

**Advantages**

- Helps users who already know which product or feature they need.
- Reflects the product structure and aligns documentation with product development.
- Provides clear boundaries for distinct product capabilities.

**Limitations**

- Users may not know which product or feature supports their goal.
- Tasks spanning multiple product areas can be difficult to navigate.
- Users may need to understand the product structure before finding relevant information.

### Task-oriented navigation

**Advantages**

- Starts with what users want to accomplish.
- Helps users find practical guidance without knowing the product structure.
- Connects information across multiple features when a task involves several capabilities.

**Limitations**

- The same feature may appear in multiple tasks, creating duplication or complex cross-linking.
- A large number of tasks can make navigation difficult to maintain.
- Feature-focused exploration may be less direct.

### A consistent content model

**Advantages**

- Establishes shared conventions for organizing and writing documentation.
- Creates a predictable experience across documentation areas.
- Supports collaboration between writers and subject-matter experts.
- Makes documentation easier to review and maintain at scale.

**Limitations**

- A rigid model may not suit every product or feature.
- Too many content types or hierarchy levels can introduce unnecessary complexity.
- Consistency requires ongoing governance and review.

The goal is not to choose one approach and apply it everywhere. It is to understand users' information needs and select an organizational structure that supports them.

## Lessons for technical writers

The comparison offers several practical lessons:

- **Understand users before designing the hierarchy.** Find out how they approach the product and what they want to accomplish.
- **Combine product- and task-oriented navigation when needed.** This is particularly useful when a product has multiple interconnected capabilities.
- **Distinguish information architecture from content models.** Information architecture defines how content is organized and navigated. A content model defines content types, their purposes, and writing conventions.
- **Explain relationships between capabilities.** When features work together, documentation should help users understand how they fit into broader workflows.

---

## References

**Stripe**
- [Stripe Documentation](https://docs.stripe.com/)

**GitHub**
- [GitHub Docs](https://docs.github.com/)
- [About the content model](https://docs.github.com/en/contributing/style-guide-and-content-model/about-the-content-model)
- [GitHub Docs style guide and content model](https://docs.github.com/en/contributing/style-guide-and-content-model)
- [Content design principles](https://docs.github.com/en/contributing/writing-for-github-docs/content-design-principles)
- [Best practices for GitHub Docs](https://docs.github.com/en/contributing/writing-for-github-docs/best-practices-for-github-docs)

---

**AI-assisted content**

This article was researched and drafted with AI assistance.
