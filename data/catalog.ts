
export const IMAGES = {
  lab: '/hero-lab.jpg',
  mining:'/sector-mining.jpg',
  water:'/sector-water.jpg',
  pharma:'/sector-pharma.jpg',
  food:'/sector-food.jpg',
  academic:'/sector-academic.jpg',
  industrial:'/sector-industrial.jpg',
  capex:'/capex.jpg',
} as const;

export type ImageKey = keyof typeof IMAGES;

export type Accent = "gold" | "teal" | "burgundy" | "blue";

export interface Category {
  slug: string;
  name: string;
  kicker: string;
  desc: string;
  accent: Accent;
}

export const PRODUCT_CATEGORIES: Category[] = [
  { slug: "chemicals-and-reagents", name: "Chemicals & Reagents", kicker: "Method-ready chemistry", desc: "Analytical reagents, standards, indicators, solvents, acids, bases and specialist chemistry selected against identity, grade, purity and application.", accent: "gold" },
  { slug: "hplc-and-analytical-chemistry", name: "HPLC & Analytical Chemistry", kicker: "Complete analytical workflows", desc: "Columns, solvents, standards, vials, filtration and sample-preparation products aligned to instrument and method compatibility.", accent: "teal" },
  { slug: "microbiology-and-life-sciences", name: "Microbiology & Life Sciences", kicker: "Controlled biological workflows", desc: "Media, cultureware, incubation, sterilisation, sampling and supporting consumables from preparation to colony review.", accent: "burgundy" },
  { slug: "glassware", name: "Glassware", kicker: "Specified by function and class", desc: "Volumetric, general-purpose, reaction, filtration and specialist glassware selected by material, accuracy, volume and connection.", accent: "blue" },
  { slug: "plasticware-and-consumables", name: "Plasticware, Consumables & Liquid Handling", kicker: "Reliable recurring supply", desc: "Pipettes, tips, tubes, bottles, containers and high-use consumables organised around volume, material and workflow.", accent: "gold" },
  { slug: "filtration-and-sample-preparation", name: "Filtration & Sample Preparation", kicker: "Clean samples before measurement", desc: "Membranes, syringe filters, papers, funnels, holders and preparation equipment matched to sample, analyte and method.", accent: "teal" },
  { slug: "balances-and-moisture-analysis", name: "Balances & Moisture Analysis", kicker: "Precision for each decision", desc: "Analytical, precision and top-pan balances plus moisture systems selected by capacity, readability, repeatability and use.", accent: "burgundy" },
  { slug: "electrochemistry-and-water-quality", name: "Electrochemistry & Water Quality", kicker: "Measurement around the parameter", desc: "pH, conductivity, dissolved oxygen, turbidity and multi-parameter systems with electrodes, standards and accessories.", accent: "blue" },
  { slug: "spectrophotometry-and-analytical-instruments", name: "Spectrophotometry & Analytical Instruments", kicker: "Method, range and throughput", desc: "UV-Vis and supporting analytical instruments selected around wavelength, range, sample presentation and throughput.", accent: "gold" },
  { slug: "physical-measurement-and-process-control", name: "Physical Measurement & Process Control", kicker: "Operational measurement", desc: "Viscosity, temperature, density, refractive index and process measurements aligned to the operating method.", accent: "teal" },
  { slug: "microscopy-and-imaging", name: "Microscopy & Imaging", kicker: "See, document and compare", desc: "Teaching, routine and research microscopy with slides, optics, illumination, imaging and preparation accessories.", accent: "burgundy" },
  { slug: "heating-incubation-and-sterilisation", name: "Heating, Incubation & Sterilisation", kicker: "Controlled temperature workflows", desc: "Hotplates, water baths, incubators, ovens and autoclaves selected against chamber, range, control and safety needs.", accent: "blue" },
  { slug: "refrigeration-and-cold-chain", name: "Refrigeration & Cold Chain", kicker: "Protect temperature-sensitive materials", desc: "Laboratory refrigeration, freezers, monitoring and storage systems configured around material, range and continuity.", accent: "gold" },
  { slug: "safety-ppe-and-chemical-management", name: "Safety, PPE & Chemical Management", kicker: "Control exposure and handling", desc: "PPE, spill response, storage, labelling and chemical-management products selected against the identified risk.", accent: "teal" },
  { slug: "laboratory-furniture-and-infrastructure", name: "Laboratory Furniture & Infrastructure", kicker: "Facilities that support the method", desc: "Benching, storage, utilities, sinks, extraction pathways and infrastructure planning for new and refurbished laboratories.", accent: "burgundy" },
  { slug: "spares-accessories-and-lifecycle-products", name: "Spares, Accessories & Lifecycle Products", kicker: "Support beyond delivery", desc: "Accessories, replacement parts, standards, electrodes, lamps, columns and recurring consumables that protect continuity.", accent: "blue" },
];

export interface Product {
  id: string;
  name: string;
  family: string;
  category: string;
  brand: string;
  pack: string;
  sectors: string[];
  classification: string;
  description: string;
  image: ImageKey;
}

export const PRODUCTS: Product[] = [
  { id: "PM-BAL-001", name: "Analytical Balance - 220 g / 0.001 g", family: "Balances & Moisture Analysis", category: "balances-and-moisture-analysis", brand: "Biobase", pack: "Configured unit", sectors: ["Academic & Research", "Food & Beverage", "Healthcare & Pharmaceuticals"], classification: "Routine / specialist sourcing", description: "Analytical balance configuration for controlled laboratory weighing. Final selection is confirmed against capacity, readability, calibration and environmental conditions.", image: "industrial" },
  { id: "PM-WAT-002", name: "Benchtop pH Meter", family: "Electrochemistry & Water Quality", category: "electrochemistry-and-water-quality", brand: "Bante", pack: "Instrument kit", sectors: ["Water & Environment", "Food & Beverage", "Industrial & Manufacturing"], classification: "Specialist sourcing", description: "Benchtop pH measurement platform specified with the required electrode, temperature compensation, buffers and sample conditions.", image: "water" },
  { id: "PM-WAT-003", name: "Portable pH / mV / Temperature Meter", family: "Electrochemistry & Water Quality", category: "electrochemistry-and-water-quality", brand: "ADWA Instruments", pack: "Portable kit", sectors: ["Water & Environment", "Agriculture", "Mining & Minerals"], classification: "Specialist sourcing", description: "Portable electrochemistry platform for field and process measurements. Configuration is confirmed against parameter, range, probe and calibration needs.", image: "water" },
  { id: "PM-FIL-004", name: "Cellulose Nitrate Membrane Filter - 0.45 µm, 47 mm", family: "Filtration & Sample Preparation", category: "filtration-and-sample-preparation", brand: "Whatman", pack: "Pack of 100", sectors: ["Water & Environment", "Microbiology", "Healthcare & Pharmaceuticals"], classification: "Routine / specialist sourcing", description: "Membrane filtration format for analytical and microbiological workflows. Material, pore size, diameter and sterility are confirmed at quotation stage.", image: "pharma" },
  { id: "PM-FIL-005", name: "Syringe Filter - 0.45 µm, 25 mm", family: "Filtration & Sample Preparation", category: "filtration-and-sample-preparation", brand: "Microsep", pack: "Pack of 50", sectors: ["HPLC & Analytical Chemistry", "Healthcare & Pharmaceuticals", "Academic & Research"], classification: "Routine / specialist sourcing", description: "Disposable syringe filtration format for sample clarification. Membrane compatibility, housing, pore size and sterility are confirmed against the method.", image: "lab" },
  { id: "PM-GLA-006", name: "Borosilicate Glass Beaker - 100 mL", family: "Glassware", category: "glassware", brand: "Borosilicate", pack: "Each / multi-pack", sectors: ["All laboratory sectors"], classification: "Routine supply", description: "General laboratory beaker selected by volume, material, graduations and thermal requirement.", image: "food" },
  { id: "PM-GLA-007", name: "Volumetric Flask - 250 mL", family: "Glassware", category: "glassware", brand: "Borosilicate", pack: "Each", sectors: ["Analytical Chemistry", "Food & Beverage", "Water & Environment"], classification: "Routine supply", description: "Volumetric preparation glassware. Class, stopper, certification and volume are confirmed against the analytical requirement.", image: "food" },
  { id: "PM-LIQ-008", name: "Adjustable Micropipette - 100-1000 µL", family: "Plasticware, Consumables & Liquid Handling", category: "plasticware-and-consumables", brand: "Verified route", pack: "Each", sectors: ["Microbiology", "Healthcare & Pharmaceuticals", "Academic & Research"], classification: "Routine / specialist sourcing", description: "Adjustable liquid-handling format selected by volume range, accuracy, tip compatibility and service requirement.", image: "pharma" },
  { id: "PM-MIC-009", name: "Binocular Research Microscope", family: "Microscopy & Imaging", category: "microscopy-and-imaging", brand: "Lasany", pack: "Configured unit", sectors: ["Academic & Research", "Healthcare & Pharmaceuticals", "Food & Beverage"], classification: "Specialist sourcing", description: "Research microscope configuration specified around optical system, objectives, illumination, ergonomics and imaging pathway.", image: "academic" },
  { id: "PM-MIC-010", name: "Binocular Teaching Microscope", family: "Microscopy & Imaging", category: "microscopy-and-imaging", brand: "Rico", pack: "Configured unit", sectors: ["Schools", "Universities", "Training Laboratories"], classification: "Specialist sourcing", description: "Teaching microscope configuration designed for routine observation and durable classroom use.", image: "academic" },
  { id: "PM-STER-011", name: "Vertical Autoclave - 50 L", family: "Heating, Incubation & Sterilisation", category: "heating-incubation-and-sterilisation", brand: "Biobase", pack: "Configured unit", sectors: ["Microbiology", "Healthcare & Pharmaceuticals", "Academic & Research"], classification: "CAPEX / specialist sourcing", description: "Vertical steam sterilisation system selected against chamber volume, load type, cycle control, utilities and documentation needs.", image: "industrial" },
  { id: "PM-HEAT-012", name: "Magnetic Stirrer with Hotplate", family: "Heating, Incubation & Sterilisation", category: "heating-incubation-and-sterilisation", brand: "Bante Instruments", pack: "Each", sectors: ["Analytical Chemistry", "Food & Beverage", "Academic & Research"], classification: "Routine / specialist sourcing", description: "Combined stirring and heating platform specified by volume, temperature range, plate material and control requirement.", image: "industrial" },
  { id: "PM-INC-013", name: "Laboratory Incubator - 160 L", family: "Heating, Incubation & Sterilisation", category: "heating-incubation-and-sterilisation", brand: "Labotec", pack: "Configured unit", sectors: ["Microbiology", "Food & Beverage", "Healthcare & Pharmaceuticals"], classification: "CAPEX / specialist sourcing", description: "Controlled-temperature incubation chamber selected against range, uniformity, capacity and monitoring needs.", image: "pharma" },
  { id: "PM-MOI-014", name: "Grain Moisture Meter - HE 50", family: "Balances & Moisture Analysis", category: "balances-and-moisture-analysis", brand: "Pfeuffer GmbH", pack: "Instrument kit", sectors: ["Agriculture", "Grain Testing", "Food & Beverage"], classification: "Specialist sourcing", description: "Grain moisture measurement configuration for procurement, storage and quality-control decisions. Commodity range and calibration are confirmed at quotation.", image: "food" },
  { id: "PM-VIS-015", name: "Digital Rotational Viscometer", family: "Physical Measurement & Process Control", category: "physical-measurement-and-process-control", brand: "Brookfield", pack: "Configured unit", sectors: ["Food & Beverage", "Healthcare & Pharmaceuticals", "Industrial & Manufacturing"], classification: "CAPEX / specialist sourcing", description: "Rotational viscosity measurement system specified around viscosity range, spindle set, temperature control and method.", image: "food" },
  { id: "PM-DIS-016", name: "Water Distillation Unit - 4 L/h", family: "Laboratory Furniture & Infrastructure", category: "laboratory-furniture-and-infrastructure", brand: "Laboid International", pack: "Configured unit", sectors: ["Academic & Research", "Healthcare & Pharmaceuticals", "Industrial & Manufacturing"], classification: "CAPEX / specialist sourcing", description: "Laboratory water distillation platform specified against output, feed-water condition, power and installation pathway.", image: "capex" },
  { id: "PM-CHEM-017", name: "2,3,5-Triphenyltetrazolium Chloride", family: "Chemicals & Reagents", category: "chemicals-and-reagents", brand: "Merck Life Science", pack: "10 g", sectors: ["Microbiology", "Academic & Research", "Agriculture"], classification: "Routine / specialist sourcing", description: "Specialist reagent supplied against confirmed identity, grade, pack size, documentation and application.", image: "lab" },
  { id: "PM-CHEM-018", name: "1,10-Phenanthroline Monohydrate", family: "Chemicals & Reagents", category: "chemicals-and-reagents", brand: "Associated Chemical Enterprises", pack: "100 g", sectors: ["Water & Environment", "Mining & Minerals", "Analytical Chemistry"], classification: "Routine / specialist sourcing", description: "Analytical reagent specification confirmed against identity, grade, purity, method and documentation needs.", image: "lab" },
  { id: "PM-MICRO-019", name: "Disposable Petri Dishes - 90 mm", family: "Microbiology & Life Sciences", category: "microbiology-and-life-sciences", brand: "Verified route", pack: "Pack configuration", sectors: ["Microbiology", "Food & Beverage", "Water & Environment"], classification: "Routine supply", description: "Disposable cultureware selected by material, diameter, sterility and packaging requirement.", image: "pharma" },
  { id: "PM-SAFE-020", name: "Autoclave Validation Indicator", family: "Safety, PPE & Chemical Management", category: "safety-ppe-and-chemical-management", brand: "Millipore", pack: "Pack configuration", sectors: ["Healthcare & Pharmaceuticals", "Microbiology", "Academic & Research"], classification: "Specialist sourcing", description: "Sterilisation verification product selected against cycle, validation requirement and documentation pathway.", image: "pharma" },
  { id: "PM-WAT-021", name: "Conductivity Standard Solution - 12,880 µS/cm", family: "Electrochemistry & Water Quality", category: "electrochemistry-and-water-quality", brand: "Hanna Instruments", pack: "500 mL", sectors: ["Water & Environment", "Food & Beverage", "Industrial & Manufacturing"], classification: "Routine / specialist sourcing", description: "Conductivity calibration standard supplied against required value, temperature reference, volume and documentation.", image: "water" },
  { id: "PM-CEN-022", name: "Haematocrit Centrifuge", family: "Microbiology & Life Sciences", category: "microbiology-and-life-sciences", brand: "Lasany", pack: "Configured unit", sectors: ["Healthcare & Pharmaceuticals", "Academic & Research"], classification: "Specialist sourcing", description: "Compact centrifugation platform specified around rotor, speed, capacity, safety and sample workflow.", image: "industrial" },
  { id: "PM-BATH-023", name: "Laboratory Water Bath - 6 Hole / 8 L", family: "Heating, Incubation & Sterilisation", category: "heating-incubation-and-sterilisation", brand: "Rico", pack: "Configured unit", sectors: ["Food & Beverage", "Healthcare & Pharmaceuticals", "Academic & Research"], classification: "Routine / specialist sourcing", description: "Laboratory water bath selected by chamber capacity, temperature range, stability and rack format.", image: "industrial" },
  { id: "PM-HPLC-024", name: "HPLC Sample Preparation Set", family: "HPLC & Analytical Chemistry", category: "hplc-and-analytical-chemistry", brand: "Multi-brand route", pack: "Configured set", sectors: ["Healthcare & Pharmaceuticals", "Food & Beverage", "Academic & Research"], classification: "Project / specialist sourcing", description: "Method-aligned set covering vials, caps, filtration, solvents and recurring accessories. Final selection follows instrument and method compatibility.", image: "lab" },
];

export interface Industry {
  slug: string;
  name: string;
  headline: string;
  desc: string;
  image: ImageKey;
  tags: string[];
}

export const INDUSTRIES: Industry[] = [
  { slug: "mining-minerals", name: "Mining & Minerals", headline: "Reliable laboratory supply for faster, defensible mineral decisions.", desc: "From sample preparation and wet chemistry to moisture, balances, electrochemistry and analytical equipment, Payroll Marketing structures supply around the mine laboratory workflow.", image: "mining", tags: ["Sample preparation", "Assay support", "Moisture", "Water quality", "CAPEX"] },
  { slug: "water-agriculture-environmental", name: "Water, Agriculture & Environmental", headline: "Measurement systems built around the parameter, sample and decision.", desc: "Field and laboratory products for water quality, environmental monitoring, soil, grain and agricultural testing - supported by standards, consumables and documentation.", image: "water", tags: ["pH", "Conductivity", "Filtration", "Grain moisture", "Sampling"] },
  { slug: "healthcare-pharmaceuticals", name: "Healthcare & Pharmaceuticals", headline: "Controlled supply for diagnostic, production and quality-control environments.", desc: "Laboratory equipment, microbiology, analytical chemistry, consumables and documentation routes configured around method, quality and continuity.", image: "pharma", tags: ["QC laboratories", "Microbiology", "Cold chain", "Sterilisation", "Documentation"] },
  { slug: "food-beverage", name: "Food & Beverage", headline: "Quality-control supply from raw material to release decision.", desc: "Moisture, pH, viscosity, microbiology, balances, glassware and analytical products aligned to food and beverage quality workflows.", image: "food", tags: ["Moisture", "Viscosity", "pH", "Microbiology", "Sampling"] },
  { slug: "academic-research-education", name: "Academic, Research & Education", headline: "Laboratories designed for teaching, discovery and repeatable practical work.", desc: "Scalable product and CAPEX pathways for schools, universities and research teams - from routine practicals to specialist analytical systems.", image: "academic", tags: ["School laboratories", "Teaching kits", "Research", "Microscopy", "CAPEX"] },
  { slug: "industrial-manufacturing", name: "Industrial & Manufacturing", headline: "Specification-led measurement for process and product control.", desc: "Laboratory and process instruments, reagents, physical measurement and recurring consumables for manufacturing quality systems.", image: "industrial", tags: ["Process control", "Physical measurement", "QA/QC", "Water", "Recurring supply"] },
  { slug: "utilities-infrastructure", name: "Utilities & Infrastructure", headline: "Technical supply for public systems, utilities and infrastructure projects.", desc: "Water-quality, environmental, laboratory and project-procurement support for utilities, municipalities and infrastructure programmes.", image: "water", tags: ["Water treatment", "Monitoring", "Projects", "Documentation"] },
  { slug: "ngos-public-health-development", name: "NGOs, Public Health & Development", headline: "Procurement-ready laboratory supply for programmes with controlled scope.", desc: "Structured multi-line sourcing, documentation and delivery coordination for public-health, development and donor-funded requirements.", image: "lab", tags: ["Programme procurement", "Public health", "Documentation", "Multi-line RFQs"] },
];

export const BRANDS = [
  { name: "Merck Life Science", scope: "Laboratory chemicals, reagents, analytical and life-science product routes", sectors: "Analytical, pharmaceutical, research and quality-control laboratories" },
  { name: "Hach", scope: "Water-quality testing instruments, reagents and supporting consumables", sectors: "Water, utilities, environment and industrial laboratories" },
  { name: "Hanna Instruments", scope: "Electrochemistry, water-quality instruments, electrodes and standards", sectors: "Water, food, agriculture, industry and education" },
  { name: "Thermo Fisher Scientific", scope: "Laboratory equipment, liquid handling, consumables and analytical product routes", sectors: "Research, healthcare, pharmaceutical, food and industrial laboratories" },
  { name: "Associated Chemical Enterprises", scope: "Laboratory chemicals, reagents, standards and consumables", sectors: "Routine and specialist laboratory applications" },
  { name: "Labcity (Pty) Ltd", scope: "Laboratory products and regional distribution routes", sectors: "Multi-sector laboratory supply" },
  { name: "Laboid International", scope: "Laboratory equipment and technical teaching product routes", sectors: "Academic, research and routine laboratories" },
  { name: "Sisco Research Laboratories", scope: "Laboratory chemicals, reagents and research product routes", sectors: "Academic, analytical and research laboratories" },
  { name: "ADWA Instruments", scope: "pH, conductivity and electrochemistry product routes", sectors: "Water, food, agriculture and industrial testing" },
  { name: "Pfeuffer GmbH", scope: "Grain, agriculture and moisture-analysis instrumentation", sectors: "Agriculture, grain, milling and food quality" },
  { name: "Brookfield", scope: "Viscosity and physical-measurement instrumentation", sectors: "Food, pharmaceutical, industrial and research laboratories" },
];

export const RESOURCES = [
  { type: "Catalogue", title: "Integrated Scientific, Laboratory & Industrial Solutions Catalogue", meta: "Representative product families and procurement routes" },
  { type: "Capability statement", title: "Mining & Minerals Laboratory Capability", meta: "Sample preparation, analytical workflows, recurring supply and CAPEX" },
  { type: "Capability statement", title: "Water, Agriculture & Environmental Capability", meta: "Parameters, instrumentation, standards, filtration and field support" },
  { type: "Technical guide", title: "What to Include in a Laboratory Equipment RFQ", meta: "A practical checklist for clearer technical and commercial review" },
  { type: "Technical guide", title: "Planning a School Science Laboratory", meta: "Core utilities, equipment, consumables, safety and phased procurement" },
  { type: "CAPEX guide", title: "Laboratory CAPEX Planning Framework", meta: "Requirement definition, specification, sourcing, delivery and lifecycle" },
];

export const CAPEX_PROJECTS: { name: string; text: string; image: ImageKey }[] = [
  { name: "Mine Laboratory", text: "Sample preparation, balances, moisture, wet chemistry, water quality and analytical pathways.", image: "mining" },
  { name: "Pharmaceutical QC Laboratory", text: "Analytical, microbiology, cold-chain, sterilisation and controlled documentation routes.", image: "pharma" },
  { name: "Food & Beverage QC Laboratory", text: "Moisture, pH, viscosity, microbiology, sampling and release-support workflows.", image: "food" },
  { name: "Water & Environmental Laboratory", text: "Electrochemistry, filtration, turbidity, sampling, standards and field-to-lab continuity.", image: "water" },
  { name: "Academic Teaching Laboratory", text: "Durable teaching equipment, glassware, chemicals, safety and structured practical sets.", image: "academic" },
  { name: "Agriculture & Grain Laboratory", text: "Grain moisture, sample preparation, balances and quality-control configurations.", image: "food" },
  { name: "Industrial QC Laboratory", text: "Physical measurement, process control, analytical chemistry and recurring consumables.", image: "industrial" },
  { name: "Research Laboratory", text: "Flexible multi-brand configurations supporting specialised methods and future expansion.", image: "capex" },
];

export const CONTACT = {
  phone: "+263 242 743630/9",
  phoneAlt: "+263 242 743299",
  mobile: "+263 772 254 903",
  whatsapp: "263772254903",
  email: "enquiries@payrollmarketing.co.zw",
  address: ["7 Murno Close", "Cranborne Park", "Harare, Zimbabwe"],
};


export function classificationTone(classification: string) {
  const c = classification.toLowerCase();
  if (c.includes("capex") || c.includes("project")) return "text-burgundy";
  if (c.includes("routine")) return "text-teal";
  return "text-labblue";
}
