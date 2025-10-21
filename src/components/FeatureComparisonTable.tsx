import { Check } from "lucide-react"
import { motion } from "framer-motion";

interface ComparisonRow {
  feature: string
  sinco: string | boolean
  competitors: string | boolean
  others: string | boolean
}

interface ComparisonSection {
  title: string
  rows: ComparisonRow[]
}



const CellContent = ({ value }: { value: string | boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex justify-center">
        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
      </div>
    ) : (
      <div className="text-center text-gray-600 font-medium">-</div>
    )
  }

  if (value === "-") {
    return <div className="text-center text-gray-600 font-medium">-</div>
  }

  return <div className="text-center text-gray-900 font-medium">{value}</div>
}

export function FeatureComparisonTable() {

    const sections = [
        {
        title: "Feature Analysis",
        rows: [
            { feature: "Editors", sinco: true, competitors: true, others: true },
            { feature: "SQL Editors", sinco: true, competitors: true, others: "-" },
            { feature: "Data Metrics", sinco: true, competitors: "-", others: true },
            {
            feature: "Reporting capabilities",
            sinco: "Unlimited",
            competitors: "50%",
            others: "20%",
            },
        ],
        },
        {
        title: "Segmentation and management",
        rows: [
            {
            feature: "Company attribute filters",
            sinco: true,
            competitors: true,
            others: true,
            },
            {
            feature: "Feature filters",
            sinco: true,
            competitors: true,
            others: "-",
            },
            {
            feature: "Reusable segments",
            sinco: true,
            competitors: "-",
            others: true,
            },
            { feature: "Add in Bulk", sinco: true, competitors: "-", others: "-" },
            { feature: "SQL Editors", sinco: "-", competitors: "-", others: "-" },
        ],
        },
        {
        title: "Feature Analysis",
        rows: [
            { feature: "Editors", sinco: true, competitors: true, others: true },
            { feature: "SQL Editors", sinco: true, competitors: true, others: "-" },
            { feature: "Data Metrics", sinco: true, competitors: "-", others: true },
            {
            feature: "Reporting capabilities",
            sinco: "Unlimited",
            competitors: "50%",
            others: "20%",
            },
        ],
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
            },
        },
    };

    const rowVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="w-full space-y-12 p-8">
        
        <div className="grid grid-cols-5 gap-4 mb-4 text-2xl">
            <div className="text-sm col-span-2 font-semibold text-gray-700"></div>
            <div className="text-center font-semibold text-[#0c2857]"> Sinco</div>
            <div className="text-center font-semibold text-[#0c2857]">Competitors</div>
            <div className="text-center font-semibold text-[#0c2857]">Others</div>
        </div>
        {sections.map((section, sectionIdx) => (
            <motion.div
                key={sectionIdx}
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                {/* Section Title (skip for the first section) */}
                {sectionIdx !== 0 && (
                <motion.h2
                    className="text-2xl font-bold text-[#0c2857]"
                    variants={rowVariants}
                >
                    {section.title}
                </motion.h2>
                )}

                {/* Table */}
                <div className="space-y-0">
                {/* Data Rows */}
                {section.rows.map((row, rowIdx) => (
                    <motion.div
                    key={rowIdx}
                    className="grid grid-cols-5 gap-4 mb-3"
                    variants={rowVariants}
                    >
                    <div className="col-span-2 text-sm text-[#0c2857] font-medium">{row.feature}</div>
                    <div className="bg-blue-50 text-[#232937] border border-blue-200 rounded p-2 flex items-center justify-center min-h-12">
                        <CellContent value={row.sinco} />
                    </div>
                    <div className="bg-blue-50 text-[#232937] border border-blue-200 rounded p-2 flex items-center justify-center min-h-12">
                        <CellContent value={row.competitors} />
                    </div>
                    <div className="bg-blue-50 text-[#232937] border border-blue-200 rounded p-2 flex items-center justify-center min-h-12">
                        <CellContent value={row.others} />
                    </div>
                    </motion.div>
                ))}
                </div>

                {/* Divider */}
                {sectionIdx < sections.length - 1 && (
                <motion.div
                    className="border-t border-gray-200 pt-8"
                    variants={rowVariants}
                />
                )}
            </motion.div>
        ))}


        </div>
    )
}
