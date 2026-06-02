"use client";

import { use, useState } from "react";
import { Send, Sparkles, Bot, User, ChevronDown, RotateCcw, Copy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const MODELS = [
  { id: "gpt-4o", name: "GPT-4o", provider: "OpenAI" },
  { id: "claude-3-5-sonnet", name: "Claude 3.5 Sonnet", provider: "Anthropic" },
  { id: "gemini-pro", name: "Gemini 1.5 Pro", provider: "Google" },
];

const SAMPLE_MESSAGES = [
  { id: 1, role: "user" as const, fa: "یک داشبورد analytics برای SaaS چه کامپوننت‌هایی باید داشته باشد؟", en: "What components should a SaaS analytics dashboard have?" },
  { id: 2, role: "assistant" as const, fa: "یک داشبورد analytics مناسب باید شامل باشد:\n\n**۱. KPI Cards اصلی**\n- درآمد ماهانه (MRR/ARR)\n- تعداد کاربران فعال\n- نرخ ریزش (Churn)\n\n**۲. نمودارهای زمانی**\n- نمودار درآمد\n- رشد کاربران\n\n**۳. جداول و لیست‌ها**\n- فعالیت‌های اخیر\n- مشتریان برتر", en: "A good SaaS analytics dashboard should include:\n\n**1. Core KPI Cards**\n- MRR/ARR\n- Active Users\n- Churn Rate\n\n**2. Time-series Charts**\n- Revenue Chart\n- User Growth\n\n**3. Tables**\n- Recent Activity\n- Top Customers" },
];

export default function AIPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const l = locale as "fa" | "en";
  const [selectedModel, setSelectedModel] = useState(MODELS[1]);
  const [input, setInput] = useState("");
  const tokenUsed = 1284;
  const maxTokens = 4096;
  return (
    <div className="space-y-6 h-full">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold flex items-center gap-2"><Sparkles className="size-6 text-primary" />{l === "fa" ? "فضای کار هوش مصنوعی" : "AI Workspace"}</h1></div>
        <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 cursor-pointer hover:bg-accent">
          <Bot className="size-4 text-primary" /><span className="text-sm font-medium">{selectedModel.name}</span><ChevronDown className="size-3 text-muted-foreground" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" style={{height:'calc(100vh - 280px)'}}>
        <div className="space-y-4">
          <Card><CardHeader className="pb-3"><CardTitle className="text-sm">{l==="fa"?"انتخاب مدل":"Select Model"}</CardTitle></CardHeader><CardContent className="space-y-2">{MODELS.map(model=>(<button key={model.id} onClick={()=>setSelectedModel(model)} className={cn("w-full text-start p-3 rounded-lg border transition-all text-sm",selectedModel.id===model.id?"border-primary bg-primary/5":"border-border hover:bg-accent")}><div className="font-medium">{model.name}</div><div className="text-xs text-muted-foreground mt-0.5">{model.provider}</div></button>))}</CardContent></Card>
          <Card><CardHeader className="pb-3"><CardTitle className="text-sm">{l==="fa"?"مصرف توکن":"Token Usage"}</CardTitle></CardHeader><CardContent><div className="space-y-3"><div className="flex justify-between text-xs"><span className="text-muted-foreground">{l==="fa"?"استفاده شده":"Used"}</span><span className="font-medium">{tokenUsed} / {maxTokens}</span></div><div className="w-full bg-muted rounded-full h-2"><div className="bg-primary h-2 rounded-full" style={{width:`${(tokenUsed/maxTokens)*100}%`}} /></div><Badge variant="success">{((tokenUsed/maxTokens)*100).toFixed(0)}% {l==="fa"?"مصرف شده":"used"}</Badge></div></CardContent></Card>
        </div>
        <Card className="lg:col-span-3 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin">
            {SAMPLE_MESSAGES.map(msg=>(<div key={msg.id} className={cn("flex gap-3",msg.role==="user"?"flex-row-reverse":"flex-row")}><div className={cn("flex items-center justify-center w-8 h-8 rounded-full shrink-0",msg.role==="user"?"bg-primary text-primary-foreground":"bg-muted")}>{msg.role==="user"?<User className="size-4" />:<Bot className="size-4" />}</div><div className={cn("max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",msg.role==="user"?"bg-primary text-primary-foreground rounded-tr-sm":"bg-muted rounded-tl-sm")}><p className="whitespace-pre-wrap">{l==="fa"?msg.fa:msg.en}</p></div></div>))}
            <div className="flex gap-3"><div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted shrink-0"><Bot className="size-4 text-muted-foreground" /></div><div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3"><div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" /><div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:150ms]" /><div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:300ms]" /></div></div></div>
          </div>
          <div className="border-t border-border p-4">
            <div className="flex items-end gap-3">
              <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={l==="fa"?"سوال یا درخواست خود...":"Type your message..."} rows={1} className="flex-1 resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              <Button size="icon" className="shrink-0 h-[44px] w-[44px] rounded-xl"><Send className="size-4" /></Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
